import React, { Fragment, useState, useEffect } from "react";
import { capitaliseFirstChar, convertPropsToQuery } from "./helpers";
import checkError from "./errors";

/**
 * Class constructor for the responsive style objects.
 * 
 * @param {Object} style - An object containing styles.
 * @private
 */

class ReactStyle {
    constructor (style) {
        this.originalStyle = style;
        this.outputStyle = {...this.originalStyle}
        this.mediaQueries = [];
    }

    /**
     * Creates a new style object.
     * 
     * Example...
     * 
     *      const style = newStyle({
     *          height: "200px",
     *          width: "200px",
     *          color: "#ffffff"
     *      });
     * 
     * @param {Object} style - An object containing the default component styles
     * @returns {Object} - An object containing the style information.
     * @public
     */

    static newStyle(style) {
        return new ReactStyle(style);
    }

    /**
     * Creates a style object to be assigned to the original style based on the media query.
     * 
     * Example...
     * 
     *      style.addMediaQuery("(min-width: 600px)", {         - The media query which wnen  true will assign the styles to the original.
     *          backgroundColor: "black",
     *          height: "300px"
     *      });
     * 
     * @param {string} queryString - The media query, which when true the styles will be applied.
     * @param {Object} style - An object containing styles to be applied when the media query returns true.
     * @public
     */

    addMediaQuery(queryString, style) {
        const query = matchMedia(queryString);

        this.mediaQueries.push({ query, style });
        this.updateOutput();
    }

    /**
     * Updates the style which will be used by the component.
     * 
     * @private
     */

    updateOutput() {
        let output = {};

        this.mediaQueries.forEach(item => {
            if (item.query.matches) {
                output = Object.assign(output, {...item.style});
            }
        });

        this.outputStyle = Object.assign({}, {...this.originalStyle, ...output});
    }
}

/**
 * A hook which lets a component use responsive styles.
 * 
 * @param {Object} style - A style object created with newStyle().
 * @returns {Object} - An object containing styles depending the associated media queries.
 * @public
 */

const useResponsiveStyle = (style) => {

    if (!(style instanceof ReactStyle)) {
        throw new Error("The useResponsiveStyle style hook must be passed a style object created with newStyle!");
    }

    const [mediaQueries, setMediaQueries] = useState(style.mediaQueries);
    const [output, setOutput] = useState(style.outputStyle);

    style.updateOutput();

    useEffect(() => {
        const mediaQuery = () => {
            setMediaQueries(style.mediaQueries);

            style.updateOutput();

            setOutput(style.outputStyle);
        }

        mediaQueries.forEach(q => {
            q.query.addListener(mediaQuery);
        });

        return () => mediaQueries.forEach(q => {
            q.query.removeListener(mediaQuery);
        });
        
    }, []);

    return output;
}

/**
 * A hook which lets you pass a media query and recieve a boolean value as a response.
 * 
 * @param {string} queryString - A string containing media queries.
 * @returns {boolean} - Returns whether the media query passed returns true or false.
 * @public
 */

const useMediaQuery = (queryString) => {
    const [query, setQuery] = useState(window.matchMedia(queryString));

    useEffect(() => {
        const mediaQuery = () => {
            setQuery(window.matchMedia(queryString));
        }

        query.addListener(mediaQuery);

        return () => query.removeListener(mediaQuery);
        
    }, []); 

    return query.matches
}

/**
 * Creates a component which will only be visible if the media query passed through props return true
 * 
 * @public
 */

const mediaQuery = (() => {
    return function MediaQueryWrapper(props) {
        const show = useMediaQuery(`${props.query || convertPropsToQuery(props)}`);

        return show 
            ? <Fragment>{ props.children }</Fragment>
            : null;
    }
})();

/**
 * Converts an objects properties into responsive components based on their values.
 * 
 * Example...
 * 
 *      const breakpoints = setBreakpoints({
 *          tabletPortScreen: {
 *              minWidth: "600px",      - The property and value specified will be converted to a media query e.g. (min-width: 600px)
 *              maxWidth: "900px"
 *          },
 *      });
 * 
 * @param {Object} breakpoints - Object containing breakpoints defined by media queries.
 * @returns {Object} - An object containing responsive components created from the properties attached to "breakpoints"
 * @public
 */

const setBreakpoints = (breakpoints) => {
    if (typeof breakpoints !== "object") {
        throw new Error("setBreakpoints() must be passed an object.");
    }

    /**
     * Takes the breakpoints object and converts it into another object of components using the properties and values atttached.
     * 
     * @param {Object} breakpoints - Object containing breakpoints defined by media queries.
     */

    const extractBreakpoints = (breakpoints) => {
        const obj = {};
    
        for (let [key, val] of Object.entries(breakpoints)) {
            Object.assign(obj, {
                [capitaliseFirstChar(key)]: breakpointQuery(convertPropsToQuery(val))
            });
        }
    
        return obj;
    }

    /**
     * Creates a component which is only visible if the media query passed to it returns true.
     * 
     * @param {string} queryString - A string containing media queries.
     */

    const breakpointQuery = (queryString) => {
        return function BreakpointWrapper({children}) {
            const show = useMediaQuery(queryString, "screen");

            return show 
                ? <Fragment>{ children }</Fragment>
                : null;
        }
    }
    return extractBreakpoints(breakpoints);
}

export const { newStyle } = ReactStyle;
export { useResponsiveStyle, useMediaQuery, setBreakpoints, mediaQuery as Media }
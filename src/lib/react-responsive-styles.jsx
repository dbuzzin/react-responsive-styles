import React, { Fragment, useState, useEffect } from "react";
import { convertPropsToQuery } from "./helpers";
import checkError from "./errors";

class ReactStyle {
    constructor (style) {
        this.originalStyle = style;
        this.outputStyle = {...this.originalStyle}
        this.mediaQueries = [];
    }

    static newStyle(style) {
        return new ReactStyle(style);
    }

    addMediaQuery(queryString, style) {
        const query = matchMedia(queryString);

        this.mediaQueries.push({ query, style });
        this.updateOutput();
    }

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

const mediaQuery = (() => {
    return function MediaQueryWrapper(props) {
        const show = useMediaQuery(`${props.query || convertPropsToQuery(props)}`);

        return show 
            ? <Fragment>{ props.children }</Fragment>
            : null;
    }
})();

const setBreakpoints = (breakpoints = {}) => {
    const breakpointQuery = (queryString) => {
        return function BreakpointWrapper({children}) {
            const show = useMediaQuery(queryString, "screen");

            return show 
                ? <Fragment>{ children }</Fragment>
                : null;
        }
    }
    return {
        isAtLeast: (...args) => checkError("breakpoints", {args, breakpoints}, breakpointQuery(`(min-width: ${breakpoints[args[0]]}px)`)),
        isAtMost: (...args) => checkError("breakpoints", {args, breakpoints}, breakpointQuery(`(max-width: ${breakpoints[args[0]]}px)`)),
        isBetween: (...args) => checkError("breakpoints", {args, breakpoints}, breakpointQuery(`(min-width: ${breakpoints[args[0]]}px) and (max-width: ${breakpoints[args[1]]}px)`)),
    }
}

export const { newStyle } = ReactStyle;
export { useResponsiveStyle, useMediaQuery, setBreakpoints, mediaQuery as Media }
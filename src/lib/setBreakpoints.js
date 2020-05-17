import React, { Fragment } from "react";
import useMediaQuery from "./useMediaQuery";
import { capitaliseFirstChar, convertPropsToQuery } from "./helpers";

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
     * @returns {Object} - An object containing components which will only at the specified breakpoints.
     * @private
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
     * @returns {Function} - Returns a new component that will only show when the media query returns true.
     * @private
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

export default setBreakpoints;
import { useState, useEffect } from "react";
import { convertPropsToQuery } from "./helpers";

/**
 * A hook which lets you pass a media query and recieve a boolean value as a response.
 * 
 * @param {Object||string} queryString - An object or string containing media queries.
 * @returns {boolean} - Returns whether the supplied media query returns true or false.
 * @public
 */

const useMediaQuery = (queryString) => {
    let queryToPass = null;

    switch (typeof queryString) {
        case "string":
            queryToPass = queryString;
            break;
        case "object":
            queryToPass = convertPropsToQuery(queryString);
            break;
        default:
            throw new Error("useMediaQuery must be passed a valid string or an object.");
    }

    const [query, setQuery] = useState(window.matchMedia(queryToPass));

    useEffect(() => {
        const mediaQuery = () => {
            setQuery(window.matchMedia(queryToPass));
        }

        query.addListener(mediaQuery);

        return () => query.removeListener(mediaQuery);
        
    }, []); 

    return query.matches
}

export default useMediaQuery;
import React, { Fragment } from "react";
import useMediaQuery from "./useMediaQuery";
import { convertPropsToQuery } from "./helpers";

/**
 * Creates a component which will only be visible if the media query passed through props returns true
 * 
 * @returns {Function} - Returns a new component that will only show when the media query returns true.
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

export default mediaQuery;
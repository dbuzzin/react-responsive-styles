import { useState, useEffect } from "react";
import ReactStyle from "./ReactStyle";

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

    useEffect(() => {
        const mediaQuery = () => {
            setMediaQueries(style.mediaQueries);
            setOutput(style.updateOutput());
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

export default useResponsiveStyle;
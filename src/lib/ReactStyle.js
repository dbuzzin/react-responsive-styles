import { convertPropsToQuery } from "./helpers";

/**
 * Class constructor for the responsive style objects.
 * 
 * @param {Object} style - An object containing styles.
 * @private
 */

class ReactStyle {
    constructor (style) {
        this.originalStyle = style;
        this.outputStyle = this.originalStyle;
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
        if (typeof style !== "object") {
            throw new Error("newStyle must be passed a valid object.");
        }

        return new ReactStyle(style);
    }

    /**
     * Creates a style object to be assigned to the original style based on the media query.
     * 
     * Example...
     * 
     *      style.addMediaQuery("(min-width: 600px)", {         - The media query which when true will assign the following styles and the original to a new object.
     *          backgroundColor: "black",
     *          height: "300px"
     *      });
     * 
     * @param {string} queryString - The media query, which when true the styles will be applied.
     * @param {Object} style - An object containing styles to be applied when the media query returns true.
     * @public
     */

    addMediaQuery(queryString, style) {
        let queryToPass = null;

        switch (typeof queryString) {
            case "string":
                queryToPass = queryString;
                break;
            case "object":
                queryToPass = convertPropsToQuery(queryString);
                break;
            default:
                throw new Error("The first argument passed to addMediaQuery must be a valid string or an object.");
        }

        if (typeof style !== "object") {
            throw new Error("The second argument passed to addMediaQuery must be a valid object.");
        }

        console.log(queryToPass);
        const query = window.matchMedia(queryToPass);
        console.log(query);

        this.mediaQueries.push({ query, style });
        this.updateOutput();
    }

    /**
     * Updates the style which will be used by the component.
     * 
     * @returns {Object} - The updated style object which corresponds to the current media query.
     * @private
     */

    updateOutput() {
        let output = {};

        this.mediaQueries.forEach(item => {
            if (item.query.matches) {
                output = Object.assign(output, {...item.style});
            }
        });

        return this.outputStyle = Object.assign({}, {...this.originalStyle, ...output});
    }
}

export default ReactStyle;
export const { newStyle } = ReactStyle;
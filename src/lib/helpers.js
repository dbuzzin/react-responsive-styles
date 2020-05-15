/**
 * Capitalises the first letter of a string only.
 * 
 * @param {string} str - A string which needs to have the first letter capitalised.
 * @returns {string} - The input string with the first character capitalised.
 */

export const capitaliseFirstChar = (str) => {
    return str.replace(/^[a-z_$]/, (match) => match.toUpperCase());
}

/**
 * Takes in a props object and converts the key, value pairs into a media query string.
 * 
 * @param {Object} props - An object containing media query features and values. Feature expressions are declared in camelCase.
 * @returns {string} - A media query as a string e.g. "screen and (min-width: 600px)".
 */

export const convertPropsToQuery = (props) => {
    const arr = [];
    const obj = Object.assign({}, props);

    delete obj.children;

    for (let [key, val] of Object.entries(obj)) {
        const regex = /[A-Z]/g;

        if (key === "type") {
            arr.push(val);

            continue;
        }
        if (regex.test(key)) {
            let newKey = key.replace(regex, "-$&").toLowerCase();  

            arr.push(`(${newKey}: ${val})`);

            continue;
        }
        if (val === true || val === "all") {
            arr.push(`(${key})`);
        }
        else {
            arr.push(`(${key}: ${val})`);
        }
    }

    return arr.join(" and ");
}
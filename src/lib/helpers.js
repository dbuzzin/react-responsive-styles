export const convertPropsToQuery = (props) => {
    const arr = [];

    for (let [key, val] of Object.entries(props)) {
        const regex = /[A-Z]/g;

        if (regex.test(key)) {
            let newKey = key.replace(regex, "-$&").toLowerCase();

            arr.push(`(${newKey}: ${val}${typeof val === "number" ? "px" : ""})`);
        }
        else if (key !== "children" && key !== "type") {
            arr.push(`(${key}: ${val}${typeof val === "number" ? "px" : ""})`);
        }
    }

    return arr.join(" and ");
}
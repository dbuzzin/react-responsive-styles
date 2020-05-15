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
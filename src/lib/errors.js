const checkError = (caller, params, callback) => {
    switch (caller) {
        case "breakpoints":
            const {args, breakpoints} = params;
            args.forEach(arg => {
                const failure = Object.keys(breakpoints).every(bp => arg !== bp); 

                if (failure) {
                    throw new Error("Breakpoint names must be equal to the names previously registered with setBreakpoints()");
                }
            });
            return callback;
    }
}

// export const checkType = (arg, type) => {
//     if (typeof arg !== type) {
//         throw new Error("");
//     }
// }

export default checkError;
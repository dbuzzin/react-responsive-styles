import React, { Fragment } from "react";
import { newStyle, useResponsiveStyle } from "../lib";

const style = newStyle({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "200px", 
    width: "200px",
    fontFamily: "Arial, sans-serif",
    fontWeight: 700,
    color: "#ffffff"
});

style.addMediaQuery("(max-width: 599px)", {
    backgroundColor: "red",
    height: "100px",
    fontWeight: 500
});

style.addMediaQuery("(min-width: 600px)", {
    backgroundColor: "black",
    height: "300px"
});

style.addMediaQuery({ minWidth: "900px" }, {
    backgroundColor: "blue",
    height: "200px",
    color: "black"
});


const App = () => {
    const testStyle = useResponsiveStyle(style);

    return (
        <Fragment>
            <span style={testStyle}>Responsive Styles</span>
        </Fragment>
    )
}

export default App;
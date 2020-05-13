import React, { Fragment } from "react";
import { Media, newStyle, useResponsiveStyle, useMediaQuery } from "../react-responsive-styles";

import "../css/main.css";

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

style.addMediaQuery("(min-width: 600px)", {
    backgroundColor: "black"
})

style.addMediaQuery("(min-width: 900px)", {
    backgroundColor: "blue",
    color: "black"
})


const App = () => {
    const testStyle = useResponsiveStyle(style);
    return (
        <Fragment>
            <span style={testStyle}>Min Width: 600px</span>
        </Fragment>
    )
}

export default App;
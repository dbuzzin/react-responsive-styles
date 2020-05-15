import React, { Fragment } from "react";
import { Media } from "../lib/react-responsive-styles";

const App = () => {
    return (
        <Fragment>

            <Media type="screen" minWidth="600px"> 
                <span>Will display on a screen with a min-width of 600px</span>
            </Media>

            <Media aspectRatio="16/10" orientation="landscape">
                <span>Will Display on a landscape screen with an aspect ration of 16:10</span>
            </Media>

            <Media query="screen and (min-resolution: 300dpi)">
                <span>Will display if the screen resolution is at least 300dpi</span>
            </Media>

        </Fragment>
    )
}

export default App;
import React, { Fragment } from "react";
import { useMediaQuery } from "../lib/react-responsive-styles";

const App = () => {
    const isMobileScreen = useMediaQuery("screen and (max-width: 599px)");
    
    return (
        <Fragment>
            { isMobileScreen && <span>Will display on a screen with a max-width of 599px</span> }
        </Fragment>
    )
}

export default App;
# react-responsive-styles

A set of five utilities and hooks for working with media queries and responsive styling in React.

How to use
----------

```jsx
import React, { Fragment } from "react";
import { newStyle, useResponsiveStyle } from "react-responsive-styles";

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

style.addMediaQuery("(min-width: 900px)", {
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
```

---

```jsx 
import React, { Fragment } from "react";
import { setBreakpoints } from "../lib/react-responsive-styles";

const breakpoints = setBreakpoints({
    mobileScreen: {
       maxWidth: "599px" 
    },
    tabletPortScreen: {
        minWidth: "600px",
        maxWidth: "900px" 
     },
     tabletLandScreen: {
        minWidth: "900px"
     },
     desktopScreen: {
        minWidth: "1200px"
     },
});

const App = () => {
    const { MobileScreen, TabletPortScreen, TabletLandScreen, DesktopScreen } = breakpoints;
    
    return (
        <Fragment>
        
            <MobileScreen>
                <span>Mobile Screen</span>
            </MobileScreen>

            <TabletPortScreen>
                <span>Tablet Portrait Screen</span>
            </TabletPortScreen>

            <TabletLandScreen>
                <span>Tablet Landscape Screen</span>
            </TabletLandScreen>

            <DesktopScreen>
                <span>Desktop Screen</span>
            </DesktopScreen>
            
        </Fragment>
    )
}

```

```jsx
import { setBreakpoints } from "react-responsive-styles";

const breakpoints = setBreakpoints({
    mobileScreen: {
       maxWidth: "599px" 
    },
    tabletPortScreen: {
        minWidth: "600px",
        maxWidth: "900px" 
     },
     tabletLandScreen: {
        minWidth: "900px"
     },
     desktopScreen: {
        minWidth: "1200px"
     },
});

export const { MobileScreen, TabletPortScreen, TabletLandScreen, DesktopScreen } = breakpoints;

```

```jsx
import React, { Fragment } from "react";
import { MobileScreen, TabletPortScreen, TabletLandScreen, DesktopScreen } from "./breakpoints";


const App = () => {
    return (
        <Fragment>
        
            <MobileScreen>
                <span>Mobile Screen</span>
            </MobileScreen>

            <TabletPortScreen>
                <span>Tablet Portrait Screen</span>
            </TabletPortScreen>

            <TabletLandScreen>
                <span>Tablet Landscape Screen</span>
            </TabletLandScreen>

            <DesktopScreen>
                <span>Desktop Screen</span>
            </DesktopScreen>
            
        </Fragment>
    )
}

export default App;
```

---

```jsx
import React, { Fragment } from "react";
import { Media } from "react-responsive-styles";

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
```

---

```jsx
import React, { Fragment } from "react";
import { useMediaQuery } from "react-responsive-styles";

const App = () => {
    const isMobileScreen = useMediaQuery("screen and (max-width: 599px)");
    
    return (
        <Fragment>
            { isMobileScreen && <span>Will display on a screen with a max-width of 599px</span> }
        </Fragment>
    )
}
```

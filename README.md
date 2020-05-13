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
import { setBreakpoints } from "react-responsive-styles";

const screenWidth = setBreakpoints({
    mobile: 599,
    tabletPortrait: 600,
    tabletLandscape: 900,
    desktop: 1200,
    tv: 3000
});

const MobileScreen = screenWidth.isAtMost("mobile");
const TabletScreenPort = screenWidth.isAtLeast("tabletPortait");
const TabletScreenLand = screenWidth.isAtMost("tabletLandscape");
const DesktopScreen = screenWidth.isBetween("desktop", "tv");

const App = () => {
    return (
        <Fragment>
        
            <MobileScreen>
                <span>Mobile Screen</span>
            </MobileScreen>
            
            <TabletScreenPort>
                <span>Tablet Portait Screen</span>
            </TabletScreenPort>
            
            <TabletScreenLand>
                <span>Tablet Landscape Screen</span>
            </TabletScreenLand>
            
            <DesktopScreen>
                <span>Desktop Screen</span>
            </DesktopScreen>
            
        </Fragment>
    )
}
```

---

```jsx
import React, { Fragment } from "react";
import { Media } from "react-responsive-styles";

const App = () => {
    return (
        <Fragment>

            <Media type="screen" minWidth={600}> 
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

--

```jsx
import React, { Fragment } from "react";
import { useMediaQuery } from "react-responsive-styles";

const App = () => {
    const isMobileScreen = useMediaQuery("screen and (max-width: 599px)");
    
    return (
        <Fragment>
            { isMobileScreen && <span>Will display on a screen with a min-width of 600px</span> }
        </Fragment>
    )
}
```

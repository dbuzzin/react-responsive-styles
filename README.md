# react-responsive-styles

A set of five utilities and hooks for working with media queries and responsive styling in React.

How to use
----------

### Create a responsive style object

Use the newStyle API to create responsive style objects and the addMediaQuery method to specify which styles will be changed when the supplied media query returns true. The style object can then be passed into the useResponsiveStyle hook which will update the style and re-render the component for any query that returns true.

### [Demo](https://dbuzzin.github.io/react-responsive-styles/demo01.html)

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

// Both a string or an object can be passed in place of a media query...

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
```

---

### Create specific breakpoint components

Each of the top level properties in the object passed to setBreakpoints will be converted into a react component and returned. A handy use case would be to declare the breakpoints in one file like this...

### [Demo](https://dbuzzin.github.io/react-responsive-styles/demo02.html)

#### breakpoints.js

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

The object containing the components is destructred when exported from "breakpoint.js" which makes it a bit smoother when importing the reusable components to another file.

#### App.js

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

### More control

If you don't want to set the breakpoints globally, you can use the Media component to create media queries on an individual basis. The queries can either be passed in as their own props, or passed to a query prop as a string or and object.

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

### Return true or false from hook

You can simply use the useMediaQuery hook to return true or false from the supplied query.

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

---

### Media Queries 

Depending on your preference, any time a media query is required, both a standard media query string or an object containing media query features in camel-case can be used...

```javascript

const isMobile = useMediaQuery("screen and (max-width: 599px)");

```

or

```javascript

const isMobile = useMediaQuery({
    type: "screen",
    maxWidth: "599px"
});

```

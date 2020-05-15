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

export const { MobileScreen, TabletPortScreen, TabletLandScreen, DesktopScreen } = breakpoints;
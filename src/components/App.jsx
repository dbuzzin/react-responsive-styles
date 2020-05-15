import React, { Fragment } from "react";
import { MobileScreen, TabletPortScreen, TabletLandScreen, DesktopScreen } from "./test"

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
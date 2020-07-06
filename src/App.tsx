import Menu from "./components/Menu";
import Page from "./pages/Page";
import React from "react";
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";

// Single Components Required
import Launchcomponent from "./components/singles/launch";
import Launchpadcomponent from "./components/singles/launchpad";
import Shipcomponent from "./components/singles/ship";

//Pages required to List REndering
import Launchespage from "./pages/groupings/launches";
import Launchpadspage from "./pages/groupings/launchpads";
import Shipspage from "./pages/groupings/ships";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId='main'>
          <Menu />
          <IonRouterOutlet id='main'>
            {/* Single Variable Params */}
            <Route
              exact={true}
              path='/page/launch/:id'
              component={Launchcomponent}
            />
            <Route
              exact
              path='/page/launchpad/:id'
              component={Launchpadcomponent}
            />
            <Route
              exact={true}
              path='/page/ship/:id'
              component={Shipcomponent}
            />
            <Route
              exact={true}
              path='/page/launches'
              component={Launchespage}
            />
            <Route
              exact={true}
              path='/page/launchpads'
              component={Launchpadspage}
            />
            <Route exact={true} path='/page/ships' component={Shipspage} />
            <Redirect exact={true} from='/page' to='/page/launches' />
            <Redirect exact={true} from='/' to='/page/launches' />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;

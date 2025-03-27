"use client"

import type React from "react"
import { useEffect } from "react"
import { Redirect, Route } from "react-router-dom"
import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact, isPlatform } from "@ionic/react"
import { IonReactRouter } from "@ionic/react-router"

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css"

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css"
import "@ionic/react/css/structure.css"
import "@ionic/react/css/typography.css"

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css"
import "@ionic/react/css/float-elements.css"
import "@ionic/react/css/text-alignment.css"
import "@ionic/react/css/text-transformation.css"
import "@ionic/react/css/flex-utils.css"
import "@ionic/react/css/display.css"

/* Theme variables */
import "./theme/variables.css"
import "./theme/custom.css"

/* Import pages */
import Menu from "./components/Menu"
import Dashboard from "./pages/Dashboard"
import About from "./pages/About"
import Events from "./pages/Events"
import Programs from "./pages/Programs"
import Volunteer from "./pages/Volunteer"
import News from "./pages/News"
import Gallery from "./pages/Gallery"
import Login from "./pages/Login"
import Register from "./pages/Register"

/* Auth Context */
import { AuthProvider } from "./contexts/AuthContext"
import PrivateRoute from "./components/PrivateRoute"

// Configure Ionic with custom settings
setupIonicReact({
  mode: "md", // Use Material Design style for all platforms for consistency
  animated: true,
})

const App: React.FC = () => {
  // Add body class for iOS devices to handle safe areas
  useEffect(() => {
    if (isPlatform("ios")) {
      document.body.classList.add("ios")
    }

    // Set CSS variables for safe areas
    document.documentElement.style.setProperty("--ion-safe-area-top", `${isPlatform("ios") ? "47px" : "0px"}`)

    document.documentElement.style.setProperty("--ion-safe-area-bottom", `${isPlatform("ios") ? "34px" : "0px"}`)
  }, [])

  return (
    <AuthProvider>
      <IonApp>
        <IonReactRouter>
          <IonSplitPane contentId="main" when={window.location.pathname !== '/login' && window.location.pathname !== '/register'}>
            <Menu />
            <IonRouterOutlet id="main">
              <Route path="/login" component={Login} exact />
              <Route path="/register" component={Register} exact />
              <PrivateRoute path="/dashboard" component={Dashboard} exact />
              <PrivateRoute path="/about" component={About} exact />
              <PrivateRoute path="/events" component={Events} exact />
              <PrivateRoute path="/programs" component={Programs} exact />
              <PrivateRoute path="/volunteer" component={Volunteer} exact />
              <PrivateRoute path="/news" component={News} exact />
              <PrivateRoute path="/gallery" component={Gallery} exact />
              <Route exact path="/">
                <Redirect to="/dashboard" />
              </Route>
            </IonRouterOutlet>
          </IonSplitPane>
        </IonReactRouter>
      </IonApp>
    </AuthProvider>
  )
}

export default App


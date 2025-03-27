import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import { defineCustomElements } from "@ionic/pwa-elements/loader"

// Call the element loader after the platform has been bootstrapped
defineCustomElements(window)

// Add meta viewport tag for proper mobile rendering
const metaViewport = document.createElement("meta")
metaViewport.name = "viewport"
metaViewport.content = "width=device-width, initial-scale=1.0, viewport-fit=cover"
document.head.appendChild(metaViewport)

// Add status bar meta tags for iOS
const metaStatusBarStyle = document.createElement("meta")
metaStatusBarStyle.name = "apple-mobile-web-app-status-bar-style"
metaStatusBarStyle.content = "black-translucent"
document.head.appendChild(metaStatusBarStyle)

const metaWebApp = document.createElement("meta")
metaWebApp.name = "apple-mobile-web-app-capable"
metaWebApp.content = "yes"
document.head.appendChild(metaWebApp)

const container = document.getElementById("root")
const root = createRoot(container!)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


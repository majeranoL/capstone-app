"use client"

import type React from "react"
import { Route, Redirect, type RouteProps } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import { IonLoading } from "@ionic/react"

interface PrivateRouteProps extends RouteProps {
  component: React.ComponentType<any>
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  const { isAuthenticated, loading } = useAuth()

  if (loading) {
    return <IonLoading isOpen={true} message={"Loading..."} />
  }

  return <Route {...rest} render={(props) => (isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />)} />
}

export default PrivateRoute


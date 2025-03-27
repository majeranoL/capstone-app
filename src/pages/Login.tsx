"use client"

import type React from "react"
import { useState } from "react"
import {
  IonContent,
  IonPage,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonLoading,
  IonAlert,
  useIonRouter,
} from "@ionic/react"
import { logInOutline, personAddOutline } from "ionicons/icons"
import { useHistory } from "react-router-dom"

const Login: React.FC = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLogin, setIsLogin] = useState(true)
  const [showLoading, setShowLoading] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState("")
  const history = useHistory()
  const router = useIonRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    if (!email || !password) {
      setAlertMessage("Please fill in all fields")
      setShowAlert(true)
      return
    }

    // Show loading
    setShowLoading(true)

    // Simulate API call
    setTimeout(() => {
      setShowLoading(false)

      // For demo purposes, any login succeeds
      if (isLogin) {
        // Store user info in localStorage (in a real app, you'd use a more secure method)
        localStorage.setItem("user", JSON.stringify({ email }))
        window.location.href = "/dashboard"
      } else {
        // Signup success
        setAlertMessage("Account created successfully! Please log in.")
        setShowAlert(true)
        setIsLogin(true)
      }
    }, 1500)
  }

  const handleSignUpClick = () => {
    router.push("/register")
  }

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCol size="12" sizeMd="8" sizeLg="6">
              <div className="ion-text-center ion-padding">
                <IonImg
                  src="/placeholder.svg?height=80&width=80"
                  alt="CESO Logo"
                  style={{ margin: "0 auto", width: "100px", height: "100px" }}
                />
                <h1 style={{ color: "var(--ion-color-primary)" }}>CESO</h1>
                <p>Community Extension Services Office</p>
              </div>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>{isLogin ? "Login to Your Account" : "Create an Account"}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <form onSubmit={handleSubmit}>
                    <IonItem>
                      <IonInput
                        type="email"
                        placeholder="Email"
                        value={email}
                        onIonChange={(e) => setEmail(e.detail.value!)}
                        required
                      />
                    </IonItem>

                    <IonItem className="ion-margin-bottom">
                      <IonInput
                        type="password"
                        placeholder="Password"
                        value={password}
                        onIonChange={(e) => setPassword(e.detail.value!)}
                        required
                      />
                    </IonItem>

                    {isLogin && (
                      <IonButton className="ion-margin-top" expand="block" type="submit">
                        <IonIcon slot="start" icon={logInOutline} />
                        Login
                      </IonButton>
                    )}

                    {!isLogin && (
                      <IonButton className="ion-margin-top" expand="block" type="submit">
                        <IonIcon slot="start" icon={personAddOutline} />
                        Sign Up
                      </IonButton>
                    )}

                    <IonButton expand="block" fill="clear" onClick={handleSignUpClick} className="signup-button">
                      Don't have an account? Sign Up
                    </IonButton>
                  </form>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonLoading isOpen={showLoading} message={isLogin ? "Logging in..." : "Creating account..."} />

        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header={isLogin ? "Login Error" : "Sign Up"}
          message={alertMessage}
          buttons={["OK"]}
        />
      </IonContent>
    </IonPage>
  )
}

export default Login


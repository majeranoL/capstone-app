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
  const [Username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLogin, setIsLogin] = useState(true)
  const [showLoading, setShowLoading] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState("")
  const history = useHistory()
  const router = useIonRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Clear any existing session data
    localStorage.clear();
    sessionStorage.clear();

    // Validate form
    if (!Username || !password) {
      setAlertMessage("Please fill in all fields")
      setShowAlert(true)
      return
    }

    setShowLoading(true)

    try {
      const response = await fetch('http://localhost/app/Index.php/LoginController/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: Username,
          password: password
        })
      });

      const data = await response.json();
      
      if (data.status) {
        // Login successful
        localStorage.setItem('user', JSON.stringify(data.user));
        // Force a page reload and redirect
        window.location.href = '/dashboard';
      } else {
        // Login failed
        setAlertMessage(data.message);
        setShowAlert(true);
      }
    } catch (error) {
      setAlertMessage("Network error. Please try again.");
      setShowAlert(true);
    } finally {
      setShowLoading(false);
    }
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
                <div style={{ display: 'inline-block', padding: '10px', borderRadius: '50%' }}>
                <IonImg
                src="CISO.png"
                alt="CESO Logo"
                style={{ margin: "0 auto", width: "100px", height: "100px" }}
                />
                </div>
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
                        type="text"
                        placeholder="Username"
                        value={Username}
                        onIonChange={(e) => setUsername(e.detail.value!)}
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


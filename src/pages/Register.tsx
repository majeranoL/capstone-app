"use client"

import type React from "react"

import { useState } from "react"
import {
  IonContent,
  IonPage,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonText,
  IonIcon,
  IonRouterLink,
  IonList,
} from "@ionic/react"
import { mailOutline, lockClosedOutline } from "ionicons/icons"
import "./Register.css"

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const [passwordCriteria, setPasswordCriteria] = useState({
    length: false,
    special: false,
    capital: false,
  })

  const handlePasswordChange = (value: string) => {
    setFormData((prev) => ({ ...prev, password: value }))
    setPasswordCriteria({
      length: value.length >= 8 && value.length <= 20,
      special: /[!@#$%^&*(),.?":{}|<>]/.test(value),
      capital: /[A-Z]/.test(value),
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add registration logic here
  }

  return (
    <IonPage>
      <IonContent className="register-content" fullscreen>
        <div className="register-container">
          <form onSubmit={handleSubmit} className="register-form">
            <h1 className="register-title">Register</h1>

            <IonList className="ion-padding">
              <IonItem>
                <IonLabel position="floating">
                  First Name <IonText color="danger">*</IonText>
                </IonLabel>
                <IonInput
                  required
                  value={formData.firstName}
                  onIonChange={(e) => setFormData((prev) => ({ ...prev, firstName: e.detail.value! }))}
                />
              </IonItem>

              <IonItem>
                <IonLabel position="floating">Last Name</IonLabel>
                <IonInput
                  value={formData.lastName}
                  onIonChange={(e) => setFormData((prev) => ({ ...prev, lastName: e.detail.value! }))}
                />
              </IonItem>

              <IonItem>
                <IonLabel position="floating">
                  Username <IonText color="danger">*</IonText>
                </IonLabel>
                <IonInput
                  required
                  value={formData.username}
                  onIonChange={(e) => setFormData((prev) => ({ ...prev, username: e.detail.value! }))}
                />
              </IonItem>

              <IonItem>
                <IonLabel position="floating">
                  Email <IonText color="danger">*</IonText>
                </IonLabel>
                <IonInput
                  type="email"
                  required
                  value={formData.email}
                  onIonChange={(e) => setFormData((prev) => ({ ...prev, email: e.detail.value! }))}
                >
                  <IonIcon icon={mailOutline} slot="start" />
                </IonInput>
              </IonItem>

              <IonItem>
                <IonLabel position="floating">Password</IonLabel>
                <IonInput
                  type="password"
                  value={formData.password}
                  onIonChange={(e) => handlePasswordChange(e.detail.value!)}
                >
                  <IonIcon icon={lockClosedOutline} slot="start" />
                </IonInput>
              </IonItem>

              <div className="password-requirements">
                <IonText color={passwordCriteria.length ? "success" : "medium"}>• 8-20 characters</IonText>
                <IonText color={passwordCriteria.special ? "success" : "medium"}>• Special character</IonText>
                <IonText color={passwordCriteria.capital ? "success" : "medium"}>• Capital letter</IonText>
              </div>

              <IonItem>
                <IonLabel position="floating">Confirm Password</IonLabel>
                <IonInput
                  type="password"
                  value={formData.confirmPassword}
                  onIonChange={(e) => setFormData((prev) => ({ ...prev, confirmPassword: e.detail.value! }))}
                >
                  <IonIcon icon={lockClosedOutline} slot="start" />
                </IonInput>
              </IonItem>

              <IonButton expand="block" type="submit" className="register-button">
                Register
              </IonButton>

              <div className="login-link">
                <IonRouterLink routerLink="/login">Already have an account? Login</IonRouterLink>
              </div>
            </IonList>
          </form>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Register


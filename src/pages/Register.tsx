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
  IonSelect,
  IonSelectOption,
} from "@ionic/react"
import { mailOutline, lockClosedOutline, eyeOutline, eyeOffOutline } from "ionicons/icons"
import "./Register.css"

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    username: "",
    password: "",
    confirmPassword: "",
    courseId: "",
    departmentId: "",
  })

  const [passwordCriteria, setPasswordCriteria] = useState({
    length: false,
    special: false,
    capital: false,
  })

  const [courses] = useState([
    { id: 1, name: "BS Information Technology" },
    { id: 2, name: "BS Computer Science" },
    { id: 3, name: "BS Information Systems" },
  ])

  const [departments] = useState([
    { id: 1, name: "College of Computing Studies" },
    { id: 2, name: "College of Engineering" },
    { id: 3, name: "College of Arts and Sciences" },
  ])

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

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
    // New implementation will go here
  }

  return (
    <IonPage>
      <IonContent className="register-content" fullscreen>
        <div className="register-container">
          <form onSubmit={handleSubmit} className="register-form">
            <h1 className="register-title">Register</h1>

            <IonList className="ion-padding">
              <IonItem>
                <IonInput
                  required
                  placeholder="First Name *"
                  value={formData.firstName}
                  onIonChange={(e) => setFormData((prev) => ({ ...prev, firstName: e.detail.value! }))}
                />
                {errors.firstName && <IonText color="danger">{errors.firstName}</IonText>}
              </IonItem>

              <IonItem>
                <IonInput
                  required
                  placeholder="Middle Name *"
                  value={formData.middleName}
                  onIonChange={(e) => setFormData((prev) => ({ ...prev, middleName: e.detail.value! }))}
                />
                {errors.middleName && <IonText color="danger">{errors.middleName}</IonText>}
              </IonItem>

              <IonItem>
                <IonInput
                  required
                  placeholder="Last Name *"
                  value={formData.lastName}
                  onIonChange={(e) => setFormData((prev) => ({ ...prev, lastName: e.detail.value! }))}
                />
                {errors.lastName && <IonText color="danger">{errors.lastName}</IonText>}
              </IonItem>

              <IonItem>
                <IonInput
                  required
                  placeholder="Username *"
                  value={formData.username}
                  onIonChange={(e) => setFormData((prev) => ({ ...prev, username: e.detail.value! }))}
                />
                {errors.username && <IonText color="danger">{errors.username}</IonText>}
              </IonItem>

              <div className="course-dept-container full-width">
                <IonItem>
                  <IonLabel position="stacked">Course</IonLabel>
                  <IonSelect
                    interface="popover"
                    placeholder="Select your course"
                    value={formData.courseId}
                    onIonChange={(e) => setFormData((prev) => ({ ...prev, courseId: e.detail.value }))}
                  >
                    {courses.map((course) => (
                      <IonSelectOption key={course.id} value={course.id}>
                        {course.name}
                      </IonSelectOption>
                    ))}
                  </IonSelect>
                  {errors.courseId && <IonText color="danger">{errors.courseId}</IonText>}
                </IonItem>

                <IonItem>
                  <IonLabel position="stacked">Department</IonLabel>
                  <IonSelect
                    interface="popover"
                    placeholder="Select your department"
                    value={formData.departmentId}
                    onIonChange={(e) => setFormData((prev) => ({ ...prev, departmentId: e.detail.value }))}
                  >
                    {departments.map((dept) => (
                      <IonSelectOption key={dept.id} value={dept.id}>
                        {dept.name}
                      </IonSelectOption>
                    ))}
                  </IonSelect>
                  {errors.departmentId && <IonText color="danger">{errors.departmentId}</IonText>}
                </IonItem>
              </div>

              <IonItem className="full-width">
                <IonInput
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={formData.password}
                  onIonChange={(e) => handlePasswordChange(e.detail.value!)}
                >
                  <IonIcon icon={lockClosedOutline} slot="start" />
                  <IonIcon 
                    icon={showPassword ? eyeOutline : eyeOffOutline} 
                    slot="end" 
                    onClick={() => setShowPassword(!showPassword)}
                    className="password-toggle"
                  />
                </IonInput>
                {errors.password && <IonText color="danger">{errors.password}</IonText>}
              </IonItem>

              <div className="password-requirements full-width">
                <IonText color={passwordCriteria.length ? "success" : "medium"}>• 8-20 characters</IonText>
                <IonText color={passwordCriteria.special ? "success" : "medium"}>• Special character</IonText>
                <IonText color={passwordCriteria.capital ? "success" : "medium"}>• Capital letter</IonText>
              </div>

              <IonItem className="full-width">
                <IonInput
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onIonChange={(e) => setFormData((prev) => ({ ...prev, confirmPassword: e.detail.value! }))}
                >
                  <IonIcon icon={lockClosedOutline} slot="start" />
                  <IonIcon 
                    icon={showConfirmPassword ? eyeOutline : eyeOffOutline} 
                    slot="end" 
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="password-toggle"
                  />
                </IonInput>
                {errors.confirmPassword && <IonText color="danger">{errors.confirmPassword}</IonText>}
              </IonItem>
              <IonButton expand="block" type="submit" className="register-button full-width">
                Register
              </IonButton>
              <div className="login-link full-width">
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


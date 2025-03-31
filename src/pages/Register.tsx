"use client"

import type React from "react"

import { useState } from "react"
import { useIonToast } from '@ionic/react'
import { useHistory } from 'react-router-dom'
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

const API_URL = 'http://localhost/app/Index.php/RegisterController/Register' 

interface RegistrationResponse {
  success: boolean
  message: string
  user?: {
    id: string
    username: string
  }
}

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
  const [isLoading, setIsLoading] = useState(false)
  const [present] = useIonToast()
  const history = useHistory()

  const handlePasswordChange = (value: string) => {
    setFormData((prev) => ({ ...prev, password: value }))
    setPasswordCriteria({
      length: value.length >= 8 && value.length <= 20,
      special: /[!@#$%^&*(),.?":{}|<>]/.test(value),
      capital: /[A-Z]/.test(value),
    })
  }

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}

    // Check required fields
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }
    if (!formData.middleName.trim()) {
      newErrors.middleName = 'Middle name is required'
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required'
    }
    if (!formData.courseId) {
      newErrors.courseId = 'Please select a course'
    }
    if (!formData.departmentId) {
      newErrors.departmentId = 'Please select a department'
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (!passwordCriteria.length || !passwordCriteria.special || !passwordCriteria.capital) {
      newErrors.password = 'Password does not meet requirements'
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password'
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    return newErrors
  }

  const registerUser = async (userData: typeof formData) => {
    try {
      const formDataToSend = new URLSearchParams();
      formDataToSend.append('firstName', userData.firstName);
      formDataToSend.append('middleName', userData.middleName);
      formDataToSend.append('lastName', userData.lastName);
      formDataToSend.append('username', userData.username);
      formDataToSend.append('password', userData.password);
      formDataToSend.append('courseId', userData.courseId as string);
      formDataToSend.append('departmentId', userData.departmentId as string);

      const response = await fetch('http://localhost/app/Index.php/RegisterController/Register', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSend,
        mode: 'cors',
      });

      const responseText = await response.text();
      console.log('Raw server response:', responseText); 

      
      if (!responseText.trim()) {
        return {
          success: true,
          message: 'Registration successful',
          user: null
        };
      }

      let data;
      try {
       
        data = JSON.parse(responseText);
      } catch (e) {
        
        if (responseText.includes('Fatal error') || responseText.includes('<br />')) {
          const errorMessage = responseText.split('<br />')[0].replace(/<[^>]+>/g, '');
          throw new Error(errorMessage || 'Server error occurred');
        }
        return {
          success: true,
          message: responseText,
          user: null
        };
      }

      // Handle parsed JSON response
      if (data && typeof data === 'object') {
        return {
          success: data.success || true,
          message: data.message || 'Registration successful',
          user: data.user || null
        };
      }

      // Fallback response
      return {
        success: true,
        message: 'Registration completed',
        user: null
      };

    } catch (error) {
      console.error('Registration error details:', error);
      throw new Error(error instanceof Error ? error.message : 'Registration failed');
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const validationErrors = validateForm()
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setIsLoading(true)
    try {
      const result = await registerUser(formData)
      
      present({
        message: 'Registration successful!',
        duration: 3000,
        color: 'success'
      })

      history.push('/login')
    } catch (error) {
      present({
        message: error instanceof Error ? error.message : 'Registration failed',
        duration: 3000,
        color: 'danger'
      })
    } finally {
      setIsLoading(false)
    }
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
              <IonButton 
                expand="block" 
                type="submit" 
                className="register-button full-width"
                disabled={isLoading}
              >
                {isLoading ? 'Registering...' : 'Register'}
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


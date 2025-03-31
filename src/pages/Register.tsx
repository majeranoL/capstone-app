"use client"

import type React from "react"
import { useState } from "react"
import { useIonToast } from '@ionic/react'
import { useHistory } from 'react-router-dom'
import {
  IonContent,
  IonPage,
  IonItem,
  IonInput,
  IonButton,
  IonList,
  IonLabel,
  IonSelect,
  IonSelectOption,
} from "@ionic/react"
import "./Register.css"

// Update API URL to include http:// and correct path
const API_URL = 'http://localhost/app/Index.php/RegisterController/Register';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    courseId: "",
    departmentId: "",
    profileImage: null as File | null,
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
  const [isLoading, setIsLoading] = useState(false)
  const [present] = useIonToast()
  const history = useHistory()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // First check if we can reach the server
      try {
        const serverCheck = await fetch( API_URL );
        if (!serverCheck.ok) {
          throw new Error('Cannot reach the server');
        }
      } catch {
        throw new Error(
          'Server connection failed!\n\n' +
          'Please check:\n' +
          '1. XAMPP is running\n' +
          '2. Apache and MySQL are started\n' +
          '3. Backend files are in C:/xampp/htdocs/app\n' +
          '4. No port conflicts on 80/443'
        );
      }

      const formDataToSend = new FormData();
      
      Object.entries(formData).forEach(([key, value]) => {
        if (key !== 'confirmPassword' && value !== null) {
          formDataToSend.append(key, value.toString());
        }
      });

      console.log('Sending request to:', API_URL); // Debug log

      const response = await fetch(API_URL, {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('API endpoint not found. Check your backend path.');
        }
        throw new Error(`Server error: ${response.status}`);
      }

      const result = await response.json();
      console.log('Server response:', result); // Debug log
      
      if (result.success) {
        present({
          message: 'Registration successful!',
          duration: 3000,
          color: 'success'
        });
        history.push('/login');
      } else {
        throw new Error(result.message || 'Registration failed');
      }
    } catch (error: any) {
      console.error('Registration error:', error); // Debug log
      present({
        message: error.message,
        duration: 5000,
        color: 'danger',
        position: 'middle'
      });
    } finally {
      setIsLoading(false);
    }
  }

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, profileImage: file }));
  };

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
                  onIonChange={(e) => handleInputChange('firstName', e.detail.value!)}
                />
              </IonItem>
              <IonItem>
                <IonInput
                  required
                  placeholder="Middle Name *"
                  value={formData.middleName}
                  onIonChange={(e) => handleInputChange('middleName', e.detail.value!)}
                />
              </IonItem>
              <IonItem>
                <IonInput
                  required
                  placeholder="Last Name *"
                  value={formData.lastName}
                  onIonChange={(e) => handleInputChange('lastName', e.detail.value!)}
                />
              </IonItem>
              <IonItem>
                <IonInput
                  required
                  placeholder="Username *"
                  value={formData.username}
                  onIonChange={(e) => handleInputChange('username', e.detail.value!)}
                />
              </IonItem>
              <IonItem>
                <IonInput
                  required
                  type="email"
                  placeholder="Email *"
                  value={formData.email}
                  onIonChange={(e) => handleInputChange('email', e.detail.value!)}
                />
              </IonItem>
              <IonItem>
                <IonInput
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={formData.password}
                  onIonChange={(e) => handleInputChange('password', e.detail.value!)}
                />
              </IonItem>
              <IonItem>
                <IonInput
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onIonChange={(e) => handleInputChange('confirmPassword', e.detail.value!)}
                />
              </IonItem>

              <IonItem>
                <IonLabel position="stacked">Course *</IonLabel>
                <IonSelect
                  interface="popover"
                  placeholder="Select your course"
                  value={formData.courseId}
                  onIonChange={(e) => handleInputChange('courseId', e.detail.value)}
                >
                  {courses.map((course) => (
                    <IonSelectOption key={course.id} value={course.id}>
                      {course.name}
                    </IonSelectOption>
                  ))}
                </IonSelect>
              </IonItem>

              <IonItem>
                <IonLabel position="stacked">Department *</IonLabel>
                <IonSelect
                  interface="popover"
                  placeholder="Select your department"
                  value={formData.departmentId}
                  onIonChange={(e) => handleInputChange('departmentId', e.detail.value)}
                >
                  {departments.map((dept) => (
                    <IonSelectOption key={dept.id} value={dept.id}>
                      {dept.name}
                    </IonSelectOption>
                  ))}
                </IonSelect>
              </IonItem>

              <IonItem>
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/jpg"
                  onChange={handleFileChange}
                />
              </IonItem>
              <IonButton 
                expand="block" 
                type="submit" 
                className="register-button full-width"
                disabled={isLoading}
              >
                {isLoading ? 'Registering...' : 'Register'}
              </IonButton>
            </IonList>
          </form>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Register


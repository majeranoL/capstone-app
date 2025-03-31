"use client"

import type React from "react"

import { useState, useCallback } from "react"
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

// Update API URL to use correct case and port
const API_URL = 'http://localhost:80/app/index.php/RegisterController/register';

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
    email: "",
    password: "",
    confirmPassword: "",
    courseId: "",
    departmentId: "",
    profileImage: null as File | null,
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
  const [imageUrl, setImageUrl] = useState<string>("");

  const saveImage = useCallback(async (file: File): Promise<string> => {
    try {
      const formData = new FormData();
      formData.append('image', file);

      const response = await fetch('http://localhost/app/uploads/profile_images', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload image');
      }

      const data = await response.json();
      return data.imageUrl; // The server should return the URL of the saved image
    } catch (error) {
      console.error('Error saving image:', error);
      throw new Error('Failed to save image');
    }
  }, []);

  const handlePasswordChange = (value: string) => {
    setFormData((prev) => ({ ...prev, password: value }))
    setPasswordCriteria({
      length: value.length >= 8 && value.length <= 20,
      special: /[!@#$%^&*(),.?":{}|<>]/.test(value),
      capital: /[A-Z]/.test(value),
    })
  }

  const handleImageUpload = async (file: File | null) => {
    if (file) {
      try {
        // Create a preview URL for the image
        const previewUrl = URL.createObjectURL(file);
        setImageUrl(previewUrl);
        setFormData(prev => ({ ...prev, profileImage: file }));
      } catch (error) {
        console.error('Error handling image upload:', error);
        setErrors(prev => ({ 
          ...prev, 
          profileImage: 'Failed to handle image' 
        }));
      }
    }
  };

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
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
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

    // Add image validation
    if (formData.profileImage) {
      const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
      if (!validTypes.includes(formData.profileImage.type)) {
        newErrors.profileImage = 'Only JPG, JPEG and PNG files are allowed';
      }
      if (formData.profileImage.size > 2 * 1024 * 1024) { // 2MB limit
        newErrors.profileImage = 'Image file size should not exceed 2MB';
      }
    }

    return newErrors
  }

  const registerUser = async (userData: typeof formData) => {
    try {
      // First check if we can reach the server
      try {
        await fetch('http://localhost:80');
      } catch {
        throw new Error(
          'Server connection failed!\n\n' +
          '1. Open XAMPP Control Panel\n' +
          '2. Start Apache (should be green)\n' +
          '3. Start MySQL (should be green)\n' +
          '4. Check if another program is using port 80\n' +
          '5. Make sure your backend is in xampp/htdocs/app'
        );
      }

      const formDataToSend = new FormData();
      Object.entries(userData).forEach(([key, value]) => {
        if (key !== 'confirmPassword' && value !== null && value !== '') {
          formDataToSend.append(key, value);
        }
      });

      const response = await fetch(API_URL, {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json',
        }
      });

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('API endpoint not found. Check your backend path.');
        }
        throw new Error(`Server error: ${response.status}`);
      }

      const result = await response.json();
      return result;

    } catch (error: any) {
      console.error('Registration error:', error);
      throw error;
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);
    try {
      const result = await registerUser(formData);
      console.log('Registration result:', result); // Debug log
      
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

              <IonItem className="full-width">
                <IonLabel position="stacked">Profile Image (Optional)</IonLabel>
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/jpg"
                  onChange={(e) => {
                    const file = e.target.files?.[0] || null;
                    handleImageUpload(file);
                  }}
                  style={{
                    width: '100%',
                    padding: '8px',
                    margin: '8px 0',
                    border: 'none',
                    background: 'transparent',
                    color: 'var(--ion-color-medium)'
                  }}
                />
                {formData.profileImage && (
                  <div style={{ marginTop: '8px' }}>
                    Selected: {formData.profileImage.name}
                    {imageUrl && <img src={imageUrl} alt="Preview" style={{ 
                      width: '100px', 
                      height: '100px', 
                      objectFit: 'cover',
                      marginLeft: '10px'
                    }} />}
                  </div>
                )}
                {errors.profileImage && <IonText color="danger">{errors.profileImage}</IonText>}
              </IonItem>

              <IonItem className="full-width">
                <IonInput
                  required
                  type="email"
                  placeholder="Email *"
                  value={formData.email}
                  onIonChange={(e) => setFormData((prev) => ({ ...prev, email: e.detail.value! }))}
                >
                  <IonIcon icon={mailOutline} slot="start" />
                </IonInput>
                {errors.email && <IonText color="danger">{errors.email}</IonText>}
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


import type React from "react"
import {
  IonContent,
  IonPage,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonItem,
  IonLabel,
  IonAvatar,
} from "@ionic/react"
import { heartOutline, eyeOutline, ribbonOutline, mailOutline, callOutline, locationOutline } from "ionicons/icons"
import Header from "../components/Header"

const About: React.FC = () => {
  return (
    <IonPage>
      <Header title="About CESO" />
      <IonContent className="ion-padding">
        {/* Banner Image */}
        <IonImg 
          src="/Malasakit.jpg" 
          alt="About CESO Banner" 
          className="header-banner" 
          style={{ 
            width: '100%', 
            height: '350px', // reduced from 150px
            marginBottom: '1rem',
            objectFit: 'fill',  // changed from 'fill'
          }} 
        />

        {/* About Card */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>About Community Extension Services Office</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              The Community Extension Services Office (CESO) is dedicated to fostering meaningful connections between
              our institution and the communities we serve. Through various outreach programs, volunteer initiatives,
              and collaborative projects, we aim to address community needs and contribute to sustainable development.
            </p>
            <p>
              Established in 2010, CESO has been at the forefront of community engagement, implementing programs that
              leverage our resources and expertise to make a positive impact on society.
            </p>
          </IonCardContent>
        </IonCard>

        {/* Mission, Vision, Values */}
        <IonGrid>
          <IonRow>
            <IonCol size="12" sizeMd="4">
              <IonCard>
                <IonCardHeader>
                  <IonIcon icon={heartOutline} color="primary" />
                  <IonCardTitle>Our Mission</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <ul>
                    <li> To instill among different sectors of the academe the spirit of service and volunteerism as an integral component of their social and moral responsibility to the community.</li>
                    <li>To reach out and effect changes in the life of the wider community through sharing of information, technology, skills, and values for the development of self-reliant and productive citizens.</li>
                  </ul>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="12" sizeMd="4">
              <IonCard>
                <IonCardHeader>
                  <IonIcon icon={eyeOutline} color="primary" />
                  <IonCardTitle>Our Vision</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <ul>
                    <li>The COMMUNITY EXTENSION SERVICES OFFICE (CESO) is a dynamic coordinating body dedicated to societal transformation through active participation of the SDCA family and improvement of its partner communities in the spirit of service and volunteerism.
                    </li>
                  </ul>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="12" sizeMd="4">
              <IonCard>
                <IonCardHeader>
                  <IonIcon icon={ribbonOutline} color="primary" />
                  <IonCardTitle>Our Values</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <ul>
                    <li>Integrity</li>
                    <li>Collaboration</li>
                    <li>Innovation</li>
                    <li>Inclusivity</li>
                    <li>Sustainability</li>
                  </ul>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>

        {/* Leadership Team */}
        <h2 className="section-header">Leadership Team</h2>
        <IonCard>
          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol size="12" sizeMd="6">
                  <IonItem lines="none">
                    <IonAvatar slot="start">
                      <img src="/placeholder.svg?height=80&width=80" alt="Director" />
                    </IonAvatar>
                    <IonLabel>
                      <h2>Dr. Jane Smith</h2>
                      <p>Director</p>
                    </IonLabel>
                  </IonItem>
                </IonCol>
                <IonCol size="12" sizeMd="6">
                  <IonItem lines="none">
                    <IonAvatar slot="start">
                      <img src="/placeholder.svg?height=80&width=80" alt="Assistant Director" />
                    </IonAvatar>
                    <IonLabel>
                      <h2>Prof. John Doe</h2>
                      <p>Assistant Director</p>
                    </IonLabel>
                  </IonItem>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>

        {/* Contact Information */}
        <h2 className="section-header">Contact Us</h2>
        <IonCard>
          <IonCardContent>
            <IonItem lines="none">
              <IonIcon icon={mailOutline} slot="start" color="primary" />
              <IonLabel>
                <h2>Email</h2>
                <p>ceso@sdca.edu.ph </p>
              </IonLabel>
            </IonItem>
            <IonItem lines="none">
              <IonIcon icon={callOutline} slot="start" color="primary" />
              <IonLabel>
                <h2>Phone</h2>
                <p>0917-625-8222 | 0922-850-9200</p>
              </IonLabel>
            </IonItem>
            <IonItem lines="none">
              <IonIcon icon={locationOutline} slot="start" color="primary" />
              <IonLabel>
                <h2>Address</h2>
                <p>
                GD III, 6th Floor, St. Dominic College of Asia Complex, E Aguinaldo Highway, Talaba IV, City of Bacoor, Cavite
                </p>
              </IonLabel>
            </IonItem>
          </IonCardContent>
        </IonCard>

        {/* Footer */}
        <IonCard style={{ 
          backgroundColor: '#800000', 
          margin: 0, 
          padding: '0.5rem', // reduced from 1rem
          marginTop: '2rem'
        }}>
          <IonCardContent>
            <IonGrid>
              <IonRow className="ion-align-items-center">
                <IonCol size="12" sizeMd="6" className="ion-text-center">
                  <IonImg 
                    src="/sdca banner.png"  
                    alt="SDCA Banner" 
                    style={{ 
                      width: '100%',
                      height: '80px', // fixed height instead of maxHeight
                      objectFit: 'contain', // changed from 'fill'
                      marginBottom: '0.25rem'
                    }} 
                  />
                </IonCol>
                <IonCol size="12" sizeMd="6">
                  <p style={{ color: 'white', margin: '0.25rem 0', fontSize: '0.9rem', textAlign: 'justify' }}> 
                    St. Dominic College of Asia is a professional college institution situated at the City of Bacoor, Cavite, Philippines. Accredited and certified by different accrediting bodies, it offers quality education equipped with research competencies and the values of volunteerism and service.
                  </p>
                  <p style={{ color: 'white', marginBottom: 0, fontSize: '0.9rem', textAlign: 'justify' }}>
                    Visit us at St. Dominic Complex, St. Dominic College of Asia Bldg. Talaba IV, City of Bacoor, Cavite, Ph 4102
                  </p>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  )
}

export default About


import type React from "react"
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
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

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>About CESO</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {/* Banner Image */}
        <IonImg 
          src="Malasakit.jpg" 
          alt="About CESO Banner" 
          className="header-banner" 
          style={{ 
            width: '100%', 
            height: '300px', 
            marginBottom: '1rem',
            objectFit: 'fill',
            
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
                  To empower communities through sustainable development initiatives, education, and collaborative
                  partnerships that address social challenges and improve quality of life.
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
                  To be a leading catalyst for positive social change, creating self-sustaining communities where
                  individuals can thrive and reach their full potential.
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
                <p>ceso@example.edu</p>
              </IonLabel>
            </IonItem>
            <IonItem lines="none">
              <IonIcon icon={callOutline} slot="start" color="primary" />
              <IonLabel>
                <h2>Phone</h2>
                <p>(123) 456-7890</p>
              </IonLabel>
            </IonItem>
            <IonItem lines="none">
              <IonIcon icon={locationOutline} slot="start" color="primary" />
              <IonLabel>
                <h2>Address</h2>
                <p>
                  123 University Ave, Suite 200
                  <br />
                  Example City, State 12345
                </p>
              </IonLabel>
            </IonItem>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  )
}

export default About


import type React from "react"
import {
  IonCard,
  IonContent,
  IonImg,
  IonPage,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonChip,
  IonBadge,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react"
import { timeOutline, locationOutline, arrowForward } from 'ionicons/icons'
import Header from "../components/Header"

const opportunities = [
  {
    id: 1,
    title: "Community Support Worker",
    category: "Social Services",
    openings: 5,
    description: "Help support local community programs and initiatives.",
    commitment: "10 hours/week",
    location: "Various Locations"
  },
  // Add more opportunities as needed
]

const Volunteer: React.FC = () => {
  return (
    <IonPage>
      <Header title="Volunteer Opportunities" />
      <IonContent>
        {/* Banner Image */}
        <IonImg src="/placeholder.svg?height=150&width=800" alt="Volunteer Banner" className="header-banner" />

        {/* Introduction Card */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Volunteer With Us</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              Volunteering with CESO is a rewarding way to give back to your community. We offer a variety of
              opportunities to match your interests, skills, and availability. Browse our current openings below.
            </p>
          </IonCardContent>
        </IonCard>

        {/* Volunteer Opportunities */}
        <h2 className="section-header">Current Opportunities</h2>
        {opportunities.map((opportunity) => (
          <IonCard key={opportunity.id} className="event-card">
            <IonCardHeader>
              <div className="ion-padding-bottom">
                <IonChip color="primary" outline>
                  {opportunity.category}
                </IonChip>
                <IonBadge color="success" className="ion-float-right">
                  {opportunity.openings} openings
                </IonBadge>
              </div>
              <IonCardTitle>{opportunity.title}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>{opportunity.description}</p>
              <IonList lines="none">
                <IonItem>
                  <IonIcon icon={timeOutline} slot="start" color="primary" />
                  <IonLabel>
                    <h3>Time Commitment</h3>
                    <p>{opportunity.commitment}</p>
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonIcon icon={locationOutline} slot="start" color="primary" />
                  <IonLabel>
                    <h3>Location</h3>
                    <p>{opportunity.location}</p>
                  </IonLabel>
                </IonItem>
              </IonList>
              <IonButton expand="block">
                Apply Now
                <IonIcon slot="end" icon={arrowForward} />
              </IonButton>
            </IonCardContent>
          </IonCard>
        ))}

        {/* Volunteer Benefits */}
        <h2 className="section-header">Benefits of Volunteering</h2>
        <IonCard>
          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol size="12" sizeMd="6">
                  <IonItem lines="none">
                    <IonLabel>
                      <h2>Make a Difference</h2>
                      <p>Directly impact your community</p>
                    </IonLabel>
                  </IonItem>
                </IonCol>
                <IonCol size="12" sizeMd="6">
                  <IonItem lines="none">
                    <IonLabel>
                      <h2>Gain Experience</h2>
                      <p>Develop new skills and knowledge</p>
                    </IonLabel>
                  </IonItem>
                </IonCol>
                <IonCol size="12" sizeMd="6">
                  <IonItem lines="none">
                    <IonLabel>
                      <h2>Build Connections</h2>
                      <p>Network with like-minded individuals</p>
                    </IonLabel>
                  </IonItem>
                </IonCol>
                <IonCol size="12" sizeMd="6">
                  <IonItem lines="none">
                    <IonLabel>
                      <h2>Personal Growth</h2>
                      <p>Boost confidence and well-being</p>
                    </IonLabel>
                  </IonItem>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  )
}

export default Volunteer


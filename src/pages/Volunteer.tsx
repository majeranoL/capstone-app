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
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonButton,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonChip,
  IonBadge,
} from "@ionic/react"
import { timeOutline, locationOutline, arrowForward } from "ionicons/icons"

const Volunteer: React.FC = () => {
  // Sample volunteer opportunities
  const opportunities = [
    {
      id: 1,
      title: "Literacy Tutor",
      description: "Help adults and children improve their reading and writing skills.",
      commitment: "2 hours/week, 3-month minimum",
      location: "Various Community Centers",
      openings: 10,
      category: "Education",
    },
    {
      id: 2,
      title: "Health Fair Volunteer",
      description: "Assist with organizing and running community health fairs.",
      commitment: "One-time event, 4-6 hours",
      location: "City Park",
      openings: 15,
      category: "Health",
    },
    {
      id: 3,
      title: "Environmental Cleanup Crew",
      description: "Join our team in cleaning up local parks and waterways.",
      commitment: "Monthly, 3 hours per session",
      location: "Various Locations",
      openings: 20,
      category: "Environment",
    },
    {
      id: 4,
      title: "Youth Mentor",
      description: "Provide guidance and support to youth in our mentorship program.",
      commitment: "4 hours/week, 6-month minimum",
      location: "Schools and Community Centers",
      openings: 8,
      category: "Youth",
    },
  ]

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Volunteer Opportunities</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
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


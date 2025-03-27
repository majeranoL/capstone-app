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
  IonButton,
  IonIcon,
  IonImg,
  IonChip,
} from "@ionic/react"
import { calendarOutline, peopleOutline, newspaperOutline, arrowForward } from "ionicons/icons"
import SafeArea from "../components/SafeArea"

const Dashboard: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <SafeArea>
          {/* Banner Image */}
          <IonImg src="sdca banner.png" alt="CESO Banner" className="header-banner" />

          {/* Rest of the content remains the same */}
          {/* Welcome Card */}
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Welcome to CESO</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>
                Welcome to the Community Extension Services Office dashboard. Use the menu to navigate to different
                sections of the application.
              </p>
              <IonButton fill="clear" color="primary" className="ion-float-right">
                Learn More
                <IonIcon slot="end" icon={arrowForward} />
              </IonButton>
            </IonCardContent>
          </IonCard>

          {/* Stats Cards */}
          <h2 className="section-header">At a Glance</h2>
          <IonGrid>
            <IonRow>
              <IonCol size="6" sizeMd="3">
                <IonCard className="stats-card">
                  <div className="number">12</div>
                  <div className="label">Active Programs</div>
                </IonCard>
              </IonCol>
              <IonCol size="6" sizeMd="3">
                <IonCard className="stats-card">
                  <div className="number">250+</div>
                  <div className="label">Volunteers</div>
                </IonCard>
              </IonCol>
              <IonCol size="6" sizeMd="3">
                <IonCard className="stats-card">
                  <div className="number">8</div>
                  <div className="label">Upcoming Events</div>
                </IonCard>
              </IonCol>
              <IonCol size="6" sizeMd="3">
                <IonCard className="stats-card">
                  <div className="number">5K+</div>
                  <div className="label">People Reached</div>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>

          {/* Quick Access */}
          <h2 className="section-header">Quick Access</h2>
          <IonGrid>
            <IonRow>
              <IonCol size="12" sizeMd="4">
                <IonCard>
                  <IonCardHeader>
                    <IonIcon icon={calendarOutline} color="primary" />
                    <IonCardTitle>Upcoming Events</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <p>View and register for upcoming community events.</p>
                    <IonButton expand="block" fill="outline" routerLink="/events">
                      View Events
                    </IonButton>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol size="12" sizeMd="4">
                <IonCard>
                  <IonCardHeader>
                    <IonIcon icon={peopleOutline} color="primary" />
                    <IonCardTitle>Volunteer</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <p>Discover opportunities to volunteer in the community.</p>
                    <IonButton expand="block" fill="outline" routerLink="/volunteer">
                      Get Involved
                    </IonButton>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol size="12" sizeMd="4">
                <IonCard>
                  <IonCardHeader>
                    <IonIcon icon={newspaperOutline} color="primary" />
                    <IonCardTitle>Latest News</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <p>Stay updated with the latest news and announcements.</p>
                    <IonButton expand="block" fill="outline" routerLink="/news">
                      Read News
                    </IonButton>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>

          {/* Featured Program */}
          <h2 className="section-header">Featured Program</h2>
          <IonCard>
            <IonImg src="/placeholder.svg?height=200&width=800" alt="Featured Program" />
            <IonCardHeader>
              <IonChip color="primary" outline>
                Featured
              </IonChip>
              <IonCardTitle>Community Outreach Program</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>Our flagship program focused on providing essential services to underserved communities.</p>
              <IonButton expand="block" routerLink="/programs">
                Learn More
              </IonButton>
            </IonCardContent>
          </IonCard>
        </SafeArea>
      </IonContent>
    </IonPage>
  )
}

export default Dashboard


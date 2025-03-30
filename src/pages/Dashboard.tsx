import type React from "react"
import {
  IonContent,
  IonPage,
  IonImg,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonIcon,
} from "@ionic/react"
import { calendarOutline, newspaperOutline, arrowForward } from "ionicons/icons"
import SafeArea from "../components/SafeArea"
import Header from "../components/Header"

const Dashboard: React.FC = () => {
  return (
    <IonPage id="main">
      <Header title="Dashboard" />
      <IonContent className="ion-padding">
        <SafeArea>
          {/* Banner Image */}
          <IonImg src="sdca banner.png" alt="CESO Banner" className="header-banner" />

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
        </SafeArea>
      </IonContent>
    </IonPage>
  )
}

export default Dashboard


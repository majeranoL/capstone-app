import type React from "react"
import {
  IonContent,
  IonPage,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
  IonImg,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonChip,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react"
import { calendarOutline, locationOutline, timeOutline, peopleOutline, arrowForward } from "ionicons/icons"
import Header from "../components/Header"

const Events: React.FC = () => {
  // Sample events data
  const events = [
    {
      id: 1,
      title: "Community Outreach Program",
      date: "June 15, 2023",
      time: "9:00 AM - 3:00 PM",
      location: "Community Center",
      image: "/placeholder.svg?height=150&width=300",
      category: "Outreach",
      spots: 15,
    },
    {
      id: 2,
      title: "Volunteer Training Workshop",
      date: "June 22, 2023",
      time: "1:00 PM - 5:00 PM",
      location: "Main Campus, Room 101",
      image: "/placeholder.svg?height=150&width=300",
      category: "Training",
      spots: 20,
    },
    {
      id: 3,
      title: "Fundraising Gala",
      date: "July 5, 2023",
      time: "6:00 PM - 10:00 PM",
      location: "City Hall Ballroom",
      image: "/placeholder.svg?height=150&width=300",
      category: "Fundraising",
      spots: 100,
    },
    {
      id: 4,
      title: "Environmental Cleanup Drive",
      date: "July 12, 2023",
      time: "8:00 AM - 12:00 PM",
      location: "Riverside Park",
      image: "/placeholder.svg?height=150&width=300",
      category: "Environment",
      spots: 50,
    },
  ]

  return (
    <IonPage>
      <Header title="Upcoming Events" />
      <IonContent className="ion-padding">
        {/* Banner Image */}
        <IonImg src="/placeholder.svg?height=150&width=800" alt="Events Banner" className="header-banner" />

        {/* Search and Filter */}
        <IonSearchbar placeholder="Search events" animated></IonSearchbar>
        <IonSegment value="all">
          <IonSegmentButton value="all">
            <IonLabel>All</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="upcoming">
            <IonLabel>Upcoming</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="registered">
            <IonLabel>Registered</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {/* Featured Event */}
        <h2 className="section-header">Featured Event</h2>
        <IonCard>
          <IonImg src="/placeholder.svg?height=200&width=800" alt="Featured Event" />
          <IonCardHeader>
            <IonChip color="primary" outline>
              Featured
            </IonChip>
            <IonCardTitle>Annual Community Service Day</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              Join us for our biggest event of the year! Volunteers from all over the community will come together for a
              day of service projects.
            </p>
            <p>
              <IonIcon icon={calendarOutline} color="primary" /> July 30, 2023
            </p>
            <p>
              <IonIcon icon={locationOutline} color="primary" /> Multiple Locations
            </p>
            <IonButton expand="block">Register Now</IonButton>
          </IonCardContent>
        </IonCard>

        {/* Event List */}
        <h2 className="section-header">Upcoming Events</h2>
        {events.map((event) => (
          <IonCard key={event.id} className="event-card">
            <IonGrid>
              <IonRow>
                <IonCol size="12" sizeMd="4">
                  <IonImg src={event.image} alt={event.title} />
                </IonCol>
                <IonCol size="12" sizeMd="8">
                  <IonCardHeader>
                    <IonChip color="primary" outline>
                      {event.category}
                    </IonChip>
                    <IonCardTitle>{event.title}</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonList lines="none">
                      <IonItem>
                        <IonIcon icon={calendarOutline} slot="start" color="primary" />
                        <IonLabel>{event.date}</IonLabel>
                      </IonItem>
                      <IonItem>
                        <IonIcon icon={timeOutline} slot="start" color="primary" />
                        <IonLabel>{event.time}</IonLabel>
                      </IonItem>
                      <IonItem>
                        <IonIcon icon={locationOutline} slot="start" color="primary" />
                        <IonLabel>{event.location}</IonLabel>
                      </IonItem>
                      <IonItem>
                        <IonIcon icon={peopleOutline} slot="start" color="primary" />
                        <IonLabel>{event.spots} spots available</IonLabel>
                      </IonItem>
                    </IonList>
                    <IonButton expand="block" fill="outline">
                      View Details
                      <IonIcon slot="end" icon={arrowForward} />
                    </IonButton>
                  </IonCardContent>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  )
}

export default Events


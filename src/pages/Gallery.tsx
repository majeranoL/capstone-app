import type React from "react"
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonImg,
  IonSegment,
  IonSegmentButton,
  IonLabel,
} from "@ionic/react"

const Gallery: React.FC = () => {
  // Sample gallery items
  const galleryItems = [
    {
      id: 1,
      title: "Community Outreach Program",
      category: "Outreach",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Volunteer Training Workshop",
      category: "Training",
      image: "/placeholder.svg?height=200&width=300",
    },
    { id: 3, title: "Literacy Program Launch", category: "Education", image: "/placeholder.svg?height=200&width=300" },
    { id: 4, title: "Health Fair", category: "Health", image: "/placeholder.svg?height=200&width=300" },
    { id: 5, title: "Environmental Cleanup", category: "Environment", image: "/placeholder.svg?height=200&width=300" },
    { id: 6, title: "Youth Mentorship Program", category: "Youth", image: "/placeholder.svg?height=200&width=300" },
    {
      id: 7,
      title: "Volunteer Recognition Ceremony",
      category: "Events",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 8,
      title: "Community Garden Project",
      category: "Environment",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {/* Banner Image */}
        <IonImg src="/placeholder.svg?height=150&width=800" alt="Gallery Banner" className="header-banner" />

        {/* Category Filter */}
        <IonSegment value="all" scrollable>
          <IonSegmentButton value="all">
            <IonLabel>All</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="outreach">
            <IonLabel>Outreach</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="education">
            <IonLabel>Education</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="health">
            <IonLabel>Health</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="environment">
            <IonLabel>Environment</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="youth">
            <IonLabel>Youth</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="events">
            <IonLabel>Events</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {/* Gallery Grid */}
        <IonGrid>
          <IonRow>
            {galleryItems.map((item) => (
              <IonCol size="6" sizeMd="4" sizeLg="3" key={item.id}>
                <IonCard>
                  <IonImg src={item.image} alt={item.title} />
                  <IonCardHeader>
                    <IonCardTitle>{item.title}</IonCardTitle>
                  </IonCardHeader>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default Gallery


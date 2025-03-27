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
  IonCardSubtitle,
  IonCardContent,
  IonImg,
  IonButton,
  IonIcon,
  IonChip,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react"
import { arrowForward } from "ionicons/icons"

const News: React.FC = () => {
  // Sample news data
  const newsItems = [
    {
      id: 1,
      title: "CESO Launches New Literacy Program",
      date: "May 15, 2023",
      summary:
        "The Community Extension Services Office is proud to announce the launch of our new literacy program aimed at improving reading skills in underserved communities.",
      image: "/placeholder.svg?height=200&width=400",
      category: "Program Launch",
    },
    {
      id: 2,
      title: "Volunteer Recognition Ceremony",
      date: "April 28, 2023",
      summary:
        "CESO held its annual Volunteer Recognition Ceremony to honor the dedicated individuals who have contributed their time and talents to our programs.",
      image: "/placeholder.svg?height=200&width=400",
      category: "Events",
    },
    {
      id: 3,
      title: "Community Health Initiative Receives Grant",
      date: "April 10, 2023",
      summary:
        "Our Community Health Initiative has been awarded a significant grant to expand services to additional neighborhoods in the coming year.",
      image: "/placeholder.svg?height=200&width=400",
      category: "Funding",
    },
    {
      id: 4,
      title: "Environmental Cleanup Drive Success",
      date: "March 22, 2023",
      summary:
        "Over 200 volunteers participated in our recent Environmental Cleanup Drive, removing over 2 tons of waste from local waterways.",
      image: "/placeholder.svg?height=200&width=400",
      category: "Environment",
    },
  ]

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>News & Updates</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {/* Banner Image */}
        <IonImg src="/placeholder.svg?height=150&width=800" alt="News Banner" className="header-banner" />

        {/* Featured News */}
        <h2 className="section-header">Featured News</h2>
        <IonCard>
          <IonImg src="/placeholder.svg?height=250&width=800" alt="Featured News" />
          <IonCardHeader>
            <IonChip color="primary" outline>
              Featured
            </IonChip>
            <IonCardTitle>CESO Celebrates 10 Years of Community Service</IonCardTitle>
            <IonCardSubtitle>June 1, 2023</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              This month marks the 10th anniversary of the Community Extension Services Office. Over the past decade,
              CESO has implemented numerous programs, engaged thousands of volunteers, and made a significant impact on
              our community.
            </p>
            <IonButton fill="clear" color="primary" className="ion-float-right">
              Read More
              <IonIcon slot="end" icon={arrowForward} />
            </IonButton>
          </IonCardContent>
        </IonCard>

        {/* News List */}
        <h2 className="section-header">Recent News</h2>
        {newsItems.map((item) => (
          <IonCard key={item.id}>
            <IonGrid>
              <IonRow>
                <IonCol size="12" sizeMd="4">
                  <IonImg src={item.image} alt={item.title} />
                </IonCol>
                <IonCol size="12" sizeMd="8">
                  <IonCardHeader>
                    <IonChip color="primary" outline>
                      {item.category}
                    </IonChip>
                    <IonCardTitle>{item.title}</IonCardTitle>
                    <IonCardSubtitle>{item.date}</IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <p>{item.summary}</p>
                    <IonButton fill="clear" color="primary" className="ion-float-right">
                      Read More
                      <IonIcon slot="end" icon={arrowForward} />
                    </IonButton>
                  </IonCardContent>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCard>
        ))}

        {/* Newsletter Signup */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Stay Updated</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>Subscribe to our newsletter to receive the latest news and updates from CESO directly in your inbox.</p>
            <IonButton expand="block">Subscribe to Newsletter</IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  )
}

export default News


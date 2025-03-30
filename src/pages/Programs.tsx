import type React from "react"
import {
  IonContent,
  IonPage,
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
  IonChip,
  IonBadge,
} from "@ionic/react"
import { arrowForward } from "ionicons/icons"
import Header from "../components/Header"

const Programs: React.FC = () => {
  // Sample programs data
  const programs = [
    {
      id: 1,
      title: "Community Literacy Program",
      description:
        "Promoting literacy and education in underserved communities through tutoring and resource provision.",
      image: "/placeholder.svg?height=200&width=400",
      status: "Active",
      category: "Education",
    },
    {
      id: 2,
      title: "Health & Wellness Initiative",
      description: "Providing health education, screenings, and wellness resources to promote community health.",
      image: "/placeholder.svg?height=200&width=400",
      status: "Active",
      category: "Health",
    },
    {
      id: 3,
      title: "Environmental Sustainability Project",
      description: "Working towards a cleaner environment through conservation efforts and sustainability education.",
      image: "/placeholder.svg?height=200&width=400",
      status: "Active",
      category: "Environment",
    },
    {
      id: 4,
      title: "Youth Mentorship Program",
      description: "Connecting youth with mentors to provide guidance, support, and positive role models.",
      image: "/placeholder.svg?height=200&width=400",
      status: "Active",
      category: "Youth",
    },
  ]

  return (
    <IonPage>
      <Header title="Programs & Initiatives" />
      <IonContent className="ion-padding">
        {/* Banner Image */}
        <IonImg src="/placeholder.svg?height=150&width=800" alt="Programs Banner" className="header-banner" />

        {/* Introduction Card */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Our Programs</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              CESO implements a variety of programs and initiatives designed to address community needs and create
              positive social impact. Our programs focus on education, health, environment, and youth development.
            </p>
          </IonCardContent>
        </IonCard>

        {/* Programs Grid */}
        <IonGrid>
          <IonRow>
            {programs.map((program) => (
              <IonCol size="12" sizeMd="6" key={program.id}>
                <IonCard>
                  <IonImg src={program.image} alt={program.title} />
                  <IonCardHeader>
                    <div className="ion-padding-bottom">
                      <IonChip color="primary" outline>
                        {program.category}
                      </IonChip>
                      <IonBadge color="success" className="ion-float-right">
                        {program.status}
                      </IonBadge>
                    </div>
                    <IonCardTitle>{program.title}</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <p>{program.description}</p>
                    <IonButton expand="block" fill="outline">
                      Learn More
                      <IonIcon slot="end" icon={arrowForward} />
                    </IonButton>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>

        {/* Get Involved Card */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Get Involved</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              Interested in supporting our programs? There are many ways to get involved, from volunteering your time to
              providing resources or financial support.
            </p>
            <IonButton expand="block" routerLink="/volunteer">
              Volunteer Opportunities
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  )
}

export default Programs


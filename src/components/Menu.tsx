"use client"

import type React from "react"

import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonAvatar,
  isPlatform,
} from "@ionic/react"

import { useLocation } from "react-router-dom"
import {
  homeOutline,
  homeSharp,
  informationCircleOutline,
  informationCircleSharp,
  calendarOutline,
  calendarSharp,
  flagOutline,
  flagSharp,
  peopleOutline,
  peopleSharp,
  newspaperOutline,
  newspaperSharp,
  imagesOutline,
  imagesSharp,
  logOutOutline,
} from "ionicons/icons"
import "./Menu.css"
import { useAuth } from "../contexts/AuthContext"
import SafeArea from "./SafeArea"

interface AppPage {
  url: string
  iosIcon: string
  mdIcon: string
  title: string
}

const appPages: AppPage[] = [
  {
    title: "Dashboard",
    url: "/dashboard",
    iosIcon: homeOutline,
    mdIcon: homeSharp,
  },
  {
    title: "About CESO",
    url: "/about",
    iosIcon: informationCircleOutline,
    mdIcon: informationCircleSharp,
  },
  {
    title: "Upcoming Events",
    url: "/events",
    iosIcon: calendarOutline,
    mdIcon: calendarSharp,
  },
  {
    title: "Programs & Initiatives",
    url: "/programs",
    iosIcon: flagOutline,
    mdIcon: flagSharp,
  },
  {
    title: "Volunteer Opportunities",
    url: "/volunteer",
    iosIcon: peopleOutline,
    mdIcon: peopleSharp,
  },
  {
    title: "News & Updates",
    url: "/news",
    iosIcon: newspaperOutline,
    mdIcon: newspaperSharp,
  },
  {
    title: "Gallery",
    url: "/gallery",
    iosIcon: imagesOutline,
    mdIcon: imagesSharp,
  },
]

const Menu: React.FC = () => {
  const location = useLocation()
  const { user, logout } = useAuth()

  return (
    <IonMenu contentId="main" type="overlay" className="mobile-menu">
      <IonContent className="ion-no-padding">
        <SafeArea>
          <div
            className="menu-header ion-padding"
            style={{
              paddingTop: isPlatform("ios") ? "calc(var(--ion-safe-area-top, 0) + 10px)" : "10px",
            }}
          >
            <IonAvatar className="menu-avatar">
              <img src="/placeholder.svg?height=80&width=80" alt="CESO Logo" />
            </IonAvatar>
          </div>
          <IonList id="inbox-list">
            <IonListHeader>CESO Menu</IonListHeader>
            {user && <IonNote>Logged in as: {user.email}</IonNote>}
            {appPages.map((appPage, index) => {
              return (
                <IonMenuToggle key={index} autoHide={false}>
                  <IonItem
                    className={location.pathname === appPage.url ? "selected" : ""}
                    routerLink={appPage.url}
                    routerDirection="none"
                    lines="none"
                    detail={false}
                  >
                    <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                    <IonLabel>{appPage.title}</IonLabel>
                  </IonItem>
                </IonMenuToggle>
              )
            })}
            {user && (
              <IonItem button onClick={logout} lines="none" detail={false}>
                <IonIcon aria-hidden="true" slot="start" icon={logOutOutline} />
                <IonLabel>Logout</IonLabel>
              </IonItem>
            )}
          </IonList>
        </SafeArea>
      </IonContent>
    </IonMenu>
  )
}

export default Menu


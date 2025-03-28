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
  /* Hidden menu items - uncomment when needed
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
  */
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
  const isDesktop = window.innerWidth > 768

  return (
    <IonMenu 
      contentId="main" 
      type={isDesktop ? "push" : "overlay"}
      className="sliding-menu"
      menuId="main-menu"
    >
      <IonContent>
        <div className="menu-content">
          <div
            className="menu-header ion-padding"
            style={{
              paddingTop: isPlatform("ios") ? "var(--ion-safe-area-top, 0)" : "16px",
            }}
          >
            <IonAvatar className="menu-avatar">
              <img src="https://lh3.googleusercontent.com/10WUdy85xFdDPBkguM31GvDuOj-8PGJP6cN9Ig4EQDc2R9v_6yaikU1cYUQHiRi9cywpA7zQHp2Gdh9WOQIDoyQ=w16383" alt="CESO Logo" />
            </IonAvatar>
          </div>
          <IonList id="inbox-list" className="ion-padding-top">
            <IonListHeader>CESO Menu</IonListHeader>
            {user && <IonNote className="ion-padding-start">Logged in as: {user.email}</IonNote>}
            {appPages.map((appPage, index) => (
              <IonMenuToggle key={index} autoHide={true}>
                <IonItem
                  className={location.pathname === appPage.url ? "selected" : ""}
                  routerLink={appPage.url}
                  routerDirection="root"
                  lines="none"
                  detail={false}
                >
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            ))}
            {user && (
              <IonMenuToggle autoHide={true}>
                <IonItem button onClick={logout} lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" icon={logOutOutline} />
                  <IonLabel>Logout</IonLabel>
                </IonItem>
              </IonMenuToggle>
            )}
          </IonList>
        </div>
      </IonContent>
    </IonMenu>
  )
}

export default Menu
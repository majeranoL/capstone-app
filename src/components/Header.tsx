import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonButtons, 
  IonMenuButton,
  IonAvatar,
  IonPopover,
  IonList,
  IonItem,
  IonIcon,
  IonLabel
} from '@ionic/react';
import { useState } from 'react';
import { notificationsOutline, personOutline } from 'ionicons/icons';
import { useAuth } from '../contexts/AuthContext';
import './Header.css';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const { user } = useAuth();
  const [popoverState, setPopoverState] = useState({ showPopover: false, event: undefined });

  return (
    <IonHeader className="main-header">
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>{title}</IonTitle>
        {user && (
          <IonButtons slot="end" className="profile-section">
            <div className="user-info">
              <span className="user-name white-text">{user.displayName || user.email}</span>
            </div>
            <IonAvatar 
              className="header-avatar"
              onClick={(e: any) => setPopoverState({ showPopover: true, event: e })}
            >
              <img 
                src="/depolt.webp" 
              />
            </IonAvatar>
            <IonPopover
              className="profile-popover"
              isOpen={popoverState.showPopover}
              event={popoverState.event}
              onDidDismiss={() => setPopoverState({ showPopover: false, event: undefined })}
            >
              <IonList>
                <IonItem button routerLink="/notifications">
                  <IonIcon slot="start" icon={notificationsOutline} />
                  <IonLabel>Notifications</IonLabel>
                </IonItem>
                <IonItem button routerLink="/profile">
                  <IonIcon slot="start" icon={personOutline} />
                  <IonLabel>Update Profile</IonLabel>
                </IonItem>
              </IonList>
            </IonPopover>
          </IonButtons>
        )}
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;

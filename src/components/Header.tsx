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
import { useState, useEffect } from 'react';
import { notificationsOutline, personOutline } from 'ionicons/icons';
import { useAuth } from '../contexts/AuthContext';
import './Header.css';

interface HeaderProps {
  title: string;
}

interface UserData {
  username: string;
  first_name: string;
  last_name: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const { user } = useAuth();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [popoverState, setPopoverState] = useState({ showPopover: false, event: undefined });

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  const getFullName = (userData: UserData | null) => {
    if (!userData) return 'User';
    return `${userData.first_name} ${userData.last_name}`;
  };

  return (
    <IonHeader className="main-header">
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>{title}</IonTitle>
        {(user || userData) && (
          <IonButtons slot="end" className="profile-section">
            <div className="user-info">
              <span className="user-name white-text">
                {getFullName(userData)}
              </span>
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

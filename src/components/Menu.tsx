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
  IonImg,
} from "@ionic/react";

import React from "react";
import { useLocation } from "react-router-dom";
import { boatOutline, rocketOutline, bonfireOutline } from "ionicons/icons";
import "./Menu.css";
import menuImg from "./../assets/spaceX_poster.jpg"

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "Launches",
    url: "/page/launches",
    iosIcon: rocketOutline,
    mdIcon: rocketOutline,
  },
  {
    title: "Launchpads",
    url: "/page/launchpads",
    iosIcon: bonfireOutline,
    mdIcon: bonfireOutline,
  },
  {
    title: "Ships",
    url: "/page/ships",
    iosIcon: boatOutline,
    mdIcon: boatOutline,
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId='main' type='overlay' class='ion-no-padding'>
      <IonContent class='ion-no-padding'>
        <IonList id='inbox-list'>
          <IonImg src={menuImg} />
          <IonListHeader class='ion-margin-top ion-margin-bottom'>
            Elon Musk, CEO
          </IonListHeader>
          <IonNote>elonmusk@spacex.com</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection='none'
                  lines='none'
                  detail={false}>
                  <IonIcon
                    slot='start'
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;

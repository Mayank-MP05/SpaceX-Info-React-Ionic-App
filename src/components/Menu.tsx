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

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "Launches",
    url: "/",
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
  } /*,
  {
    title: "Inbox",
    url: "/page/Inbox",
    iosIcon: mailOutline,
    mdIcon: mailSharp,
  },
  {
    title: "Inbox",
    url: "/page/Inbox",
    iosIcon: mailOutline,
    mdIcon: mailSharp,
  },
  {
    title: "Outbox",
    url: "/page/Outbox",
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp,
  },
  {
    title: "Favorites",
    url: "/page/Favorites",
    iosIcon: heartOutline,
    mdIcon: heartSharp,
  },
  {
    title: "Archived",
    url: "/page/Archived",
    iosIcon: archiveOutline,
    mdIcon: archiveSharp,
  },
  {
    title: "Trash",
    url: "/page/Trash",
    iosIcon: trashOutline,
    mdIcon: trashSharp,
  },
  {
    title: "Spam",
    url: "/page/Spam",
    iosIcon: warningOutline,
    mdIcon: warningSharp,
  },*/,
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId='main' type='overlay' class='ion-no-padding'>
      <IonContent class='ion-no-padding'>
        <IonList id='inbox-list'>
          <IonImg src='https://d2c7ipcroan06u.cloudfront.net/wp-content/uploads/2019/12/SpaceX_rev-696x392.jpg' />
          <IonListHeader class='ion-margin-top ion-margin-bottom'>
            SpaceX
          </IonListHeader>
          <IonNote>Elon_Musk@SpaceX.com</IonNote>
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

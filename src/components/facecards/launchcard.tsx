import React from "react";
import {
  IonButton,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCard,
  IonCardContent,
  IonRouterLink,
  IonItem,
  IonIcon,
  IonBadge,
} from "@ionic/react";

import { boatOutline, rocketOutline, bonfireOutline } from "ionicons/icons";
interface LaunchCardProps {
  id: number;
  flight_number: number;
  details: string;
  location: {
    name: string;
    region: string;
  };
  mission_name: string;
  launch_site: {
    site_name_long: string;
  };
}

const Launchcard: React.FC<LaunchCardProps> = ({
  flight_number,
  details,
  mission_name,
  launch_site,
}) => {
  return (
    <IonItem routerLink={`/page/launch/${flight_number}`}>
      <IonCard style={{ width: "100%" }}>
        <IonCardHeader>
          <IonItem class='ion-no-margin'>
          <IonIcon
                    slot='start'
                    ios={rocketOutline}
                    md={rocketOutline}
                  />
            <h3 ion-text='true' color='secondary'>
              {mission_name}
            </h3>

            <IonBadge slot='end' color='warning'>
              {flight_number}
            </IonBadge>
          </IonItem>
        </IonCardHeader>

        <IonCardContent>
          <IonCardTitle>{launch_site.site_name_long}</IonCardTitle>
          {details}
        </IonCardContent>
      </IonCard>
    </IonItem>
  );
};
export default Launchcard;

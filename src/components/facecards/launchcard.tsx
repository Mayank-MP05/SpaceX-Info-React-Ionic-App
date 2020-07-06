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
  IonBadge,
} from "@ionic/react";
import { Link } from "react-router-dom";
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
      <IonCard>
        <IonCardHeader>
          <IonItem class='ion-no-margin'>
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

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
interface LaunchpadCardProps {
  id: number;
  flight_number: string;
  details: string;
  mission_name: string;
  location: {
    name: string;
  };
  vehicles_launched: [];
  site_id: string;
}

const Launchpadcard: React.FC<LaunchpadCardProps> = ({
  id,
  location,
  details,
  vehicles_launched,
  site_id,
}) => {
  return (
    <IonItem routerLink={`/page/launchpad/${id}`}>
      <IonCard>
        <IonCardHeader>
          <IonItem class='ion-no-margin'>
            <h3 ion-text='true' color='secondary'>
              {location.name}
            </h3>

            <IonBadge slot='end' color='warning'>
              {"NOne Vehicle HEre"}
            </IonBadge>
          </IonItem>
        </IonCardHeader>

        <IonCardContent>
          <IonCardTitle>{site_id}</IonCardTitle>
          {details}
        </IonCardContent>
      </IonCard>
    </IonItem>
  );
};
export default Launchpadcard;

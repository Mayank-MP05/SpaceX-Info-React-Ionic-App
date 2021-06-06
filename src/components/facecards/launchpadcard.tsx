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
  IonIcon
} from "@ionic/react";
import { boatOutline, rocketOutline, bonfireOutline } from "ionicons/icons";
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
    <IonItem routerLink={`/page/launchpad/${site_id}`}>
      <IonCard style={{ width: "100%" }}>
        <IonCardHeader>
          <IonItem class='ion-no-margin'>
          <IonIcon
                    slot='start'
                    ios={bonfireOutline}
                    md={bonfireOutline}
                  />
            <h3 ion-text='true' color='secondary'>
              {location.name}
            </h3>

            <IonBadge slot='end' color='warning'>
              {"No Vehicle Here"}
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

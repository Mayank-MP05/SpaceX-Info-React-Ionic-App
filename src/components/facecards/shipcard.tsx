import React from "react";
import { home } from "ionicons/icons";
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
  IonImg,
  IonText,
  IonIcon
} from "@ionic/react";
import { boatOutline, rocketOutline, bonfireOutline } from "ionicons/icons";
interface ShipCardProps {
  ship_id: string;
  ship_name: string;
  ship_type: string;
  year_built: number;
  home_port: string;
  image?: string;
}

const Shipcard: React.FC<ShipCardProps> = ({
  ship_id,
  ship_name,
  ship_type,
  year_built,
  home_port,
  image,
}) => {
  return (
    <IonItem routerLink={`/page/ship/${ship_id}`}>
      <IonCard style={{ width: "100%" }}>
        <IonCardHeader>
          <IonItem class='ion-no-margin'>
          <IonIcon
                    slot='start'
                    ios={boatOutline}
                    md={boatOutline}
                  />
            <h3 ion-text='true' color='secondary'>
              {ship_name}
            </h3>

            <IonBadge slot='end' color='warning'>
              {ship_type}
            </IonBadge>
          </IonItem>
        </IonCardHeader>

        <IonCardContent>
          <IonText>{home_port}</IonText>
        </IonCardContent>
      </IonCard>
    </IonItem>
  );
};
export default Shipcard;

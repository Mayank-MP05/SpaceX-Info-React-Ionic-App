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
} from "@ionic/react";
interface LaunchCardProps {
  ship_id: string;
  ship_name: string;
  ship_type: string;
  year_built: number;
  home_port: string;
  image?: string;
}

const Shipcard: React.FC<LaunchCardProps> = ({
  ship_id,
  ship_name,
  ship_type,
  year_built,
  home_port,
  image,
}) => {
  return (
    <IonItem routerLink={`/page/launch/${ship_id}`}>
      <IonCard>
        <IonCardHeader>
          <IonItem class='ion-no-margin'>
            <h3 ion-text='true' color='secondary'>
              {ship_name}
            </h3>

            <IonBadge slot='end' color='warning'>
              {ship_type} : {year_built}
            </IonBadge>
          </IonItem>
        </IonCardHeader>

        <IonCardContent>
          <IonCardTitle>{home_port}</IonCardTitle>
          {image ? <IonImg src={image} /> : ""}
        </IonCardContent>
      </IonCard>
    </IonItem>
  );
};
export default Shipcard;

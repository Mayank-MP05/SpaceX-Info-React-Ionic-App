import React from "react";
import { useParams } from "react-router-dom";

import {
  IonButton,
  IonButtons,
  IonCard,
  IonHeader,
  IonPage,
  IonToolbar,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonCardHeader,
  IonItem,
  IonBadge,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";
interface LaunchProps {
  id: string;
}

const Launchpadcomponent: React.FC<LaunchProps> = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Launchepads</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Launchepads</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* Card Arena Starts Here ... */}
        <IonCard>
          <IonCardHeader>
            <IonItem class='ion-no-margin'>
              <h3 ion-text='true' color='secondary'></h3>

              <IonBadge slot='end' color='warning'></IonBadge>
            </IonItem>
          </IonCardHeader>

          <IonCardContent>
            <IonCardTitle></IonCardTitle>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Launchpadcomponent;

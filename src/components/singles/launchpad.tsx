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
        <div className='container'>
          <h1>Launchpad Component with ID : {id}</h1>
        </div>
        <IonButton expand='block'>Load More Data ...</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Launchpadcomponent;

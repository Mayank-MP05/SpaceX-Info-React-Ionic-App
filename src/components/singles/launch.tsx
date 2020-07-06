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

const Launchcomponent: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Launches</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Launches</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className='container'>
          <h1>Launch Component with ID : {id}</h1>
        </div>
        <IonButton expand='block'>Load More Data ...</IonButton>
      </IonContent>
    </>
  );
};

export default Launchcomponent;

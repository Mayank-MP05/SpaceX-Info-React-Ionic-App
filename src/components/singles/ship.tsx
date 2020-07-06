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

const Shipcomponent: React.FC<LaunchProps> = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Ship</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Ship</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className='container'>
          <h1>Ship Component with ID : {id}</h1>
        </div>
        <IonButton expand='block'>Load More Data ...</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Shipcomponent;

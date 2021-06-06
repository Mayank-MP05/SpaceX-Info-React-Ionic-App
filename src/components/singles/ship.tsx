import React, { useEffect, useState } from "react";
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
  IonRow,
  IonCol,
  IonItemDivider,
  IonGrid,
  IonImg,
  IonIcon
} from "@ionic/react";
import Axios from "axios";
import { boatOutline, rocketOutline, bonfireOutline } from "ionicons/icons";

interface ShipProps {
  ship_id: string;
  ship_name: string;
  ship_type: string;
  year_built: number;
  home_port: string;
  image?: string;
  status: string;
  missions: [
    {
      name: string;
      flight: number;
    }
  ];
  position: {
    latitude: any;
    longitude: any;
  };
}

const Shipcomponent: React.FC<ShipProps> = () => {
  const [APIdata, setAPIdata] = useState<ShipProps>();
  const { id } = useParams<{ id: string }>();

  const callApi = () => {
    //console.log(id);
    Axios.get(`https://api.spacexdata.com/v3/ships/${id}`).then((res) => {
      setAPIdata(res.data);
      //console.log(APIdata);
      //console.log(`https://api.spacexdata.com/v3/launches/${id}`);
    });
  };

  //UseEffect Called as ID is Changed in URL
  useEffect(() => {
    callApi();
  }, [id]);

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

        {/* Card Arena Starts Here ... */}
        {APIdata ? (
          <IonCard>
            <IonCardHeader>
              <IonItem class='ion-no-margin'>
              <IonIcon
                    slot='start'
                    ios={boatOutline}
                    md={boatOutline}
                  />
                <h3 ion-text='true' color='secondary'>
                  {APIdata.ship_name}
                </h3>

                <IonBadge slot='end' color='warning'>
                  {`Type : ${APIdata.ship_type}`}
                </IonBadge>
              </IonItem>
            </IonCardHeader>

            <IonCardContent>
              <IonImg src={APIdata.image} class='ion-padding' />
              <IonCardTitle>{APIdata.home_port}</IonCardTitle>
              <IonItemDivider />

              {APIdata.missions ? (
                <IonGrid>
                  <IonRow style={{ border: "4px solid grey" }}>
                    <IonCol>Name</IonCol>
                    <IonCol>Flights</IonCol>
                  </IonRow>
                  {APIdata.missions.map((arr, index) => {
                    return (
                      <IonRow key={index} style={{ border: "2px solid grey" }}>
                        <IonCol>{arr.name}</IonCol>
                        <IonCol>{arr.flight}</IonCol>
                      </IonRow>
                    );
                  })}
                </IonGrid>
              ) : (
                ""
              )}
              <IonItemDivider />
              {APIdata.position.latitude ? (
                <IonRow style={{ border: "2px solid grey" }}>
                  <IonCol>{`Latitude : ${APIdata.position.latitude}`}</IonCol>
                  <IonCol>{`Longitude : ${APIdata.position.longitude}`}</IonCol>
                </IonRow>
              ) : (
                ""
              )}
            </IonCardContent>
          </IonCard>
        ) : (
          <IonCard>
            <IonCardContent>
              <IonCardTitle>Data is Loading ...</IonCardTitle>
            </IonCardContent>
          </IonCard>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Shipcomponent;

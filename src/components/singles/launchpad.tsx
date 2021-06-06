import React, { useState, useEffect } from "react";
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
  IonImg,
  IonItemDivider,
  IonRow,
  IonCol,
  IonGrid,
  IonIcon
} from "@ionic/react";
import Axios from "axios";

import { boatOutline, rocketOutline, bonfireOutline } from "ionicons/icons";

interface LaunchpadCardProps {
  id: number;
  status: string;
  details: string;
  mission_name: string;
  location: {
    name: string;
    region: string;
    latitude: any;
    longitude: any;
  };
  vehicles_launched: [];
  site_id: string;
  site_name_long: string;
  attempted_launches: number;
  successful_launches: number;
}

const Launchpadcomponent: React.FC<LaunchpadCardProps> = () => {
  const { id } = useParams<{ id: string }>();
  const [APIdata, setAPIdata] = useState<LaunchpadCardProps>();

  const callApi = () => {
    //console.log(id);
    Axios.get(`https://api.spacexdata.com/v3/launchpads/${id}`).then((res) => {
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
          <IonTitle>Launchpad</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Launchpad</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* Card Arena Starts Here ... */}
        {APIdata ? (
          <IonCard>
            <IonCardHeader>
              <IonItem class='ion-no-margin'>
              <IonIcon
                    slot='start'
                    ios={bonfireOutline}
                    md={bonfireOutline}
                  />
                <IonCardTitle color='secondary'>
                  {APIdata.site_name_long}
                </IonCardTitle>
                <IonBadge slot='end' color='warning'>
                  {`Status : ${APIdata.status}`}
                </IonBadge>
              </IonItem>
            </IonCardHeader>

            <IonCardContent>
              <IonRow style={{ border: "2px solid grey" }}>
                <IonCol>{`Latitude : ${APIdata.location.latitude}`}</IonCol>{" "}
                <IonCol>{`Longitude : ${APIdata.location.longitude}`}</IonCol>
              </IonRow>
              {APIdata.details}
              <IonItemDivider />
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

export default Launchpadcomponent;

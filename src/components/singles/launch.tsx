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
  IonItemDivider,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonIcon
} from "@ionic/react";

import { boatOutline, rocketOutline, bonfireOutline } from "ionicons/icons";
import Axios from "axios";
interface LaunchCardProps {
  id: number;
  flight_number: number;
  details: string;
  location: {
    name: string;
    region: string;
  };
  mission_name: string;
  launch_site: {
    site_name_long: string;
  };

  //New Params
  launch_year: number;
  launch_date_utc: string;
  rocket: {
    rocket_name: string;
  };
  timeline: {
    webcast_liftoff: number;
    go_for_prop_loading: number;
  };
  links: {
    mission_patch_small: string;
  };
}
const Launchcomponent: React.FC = () => {
  const [APIdata, setAPIdata] = useState<LaunchCardProps>();
  const { id } = useParams<{ id: string }>();

  const callApi = () => {
    //console.log(id);
    Axios.get(`https://api.spacexdata.com/v3/launches/${id}`).then((res) => {
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
          <IonTitle>Launch</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Launch - {id}</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* Card Arena Starts Here ... */}
        {APIdata ? (
          <IonCard>
            <IonCardHeader>
              <IonItem class='ion-no-margin'>
              <IonIcon
                    slot='start'
                    ios={rocketOutline}
                    md={rocketOutline}
                  />
                <h3 ion-text='true' color='secondary'>
                  {APIdata.mission_name}
                </h3>

                <IonBadge slot='end' color='warning'>
                  {APIdata.flight_number} | Year : {APIdata.launch_year}
                </IonBadge>
              </IonItem>
            </IonCardHeader>

            <IonCardContent>
              <IonCardTitle>{APIdata.launch_site.site_name_long}</IonCardTitle>
              <IonImg
                src={APIdata.links.mission_patch_small}
                class='ion-padding'
              />
              {APIdata.details}
              <IonItemDivider />

              {APIdata.timeline ? (
                <IonGrid>
                  {Object.entries(APIdata.timeline).map((arr, index) => {
                    return (
                      <IonRow key={index} style={{ border: "2px solid grey" }}>
                        {arr.map((kv, ind) => (
                          <IonCol text-center key={ind}>
                            {kv}
                          </IonCol>
                        ))}
                      </IonRow>
                    );
                  })}
                </IonGrid>
              ) : (
                ""
              )}
              <IonItemDivider />
              <IonRow class='ion-justify-content-end'>
                {new Date(APIdata.launch_date_utc).toLocaleDateString()}
              </IonRow>
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

export default Launchcomponent;

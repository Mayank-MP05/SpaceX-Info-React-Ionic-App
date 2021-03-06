import React, { useEffect, useState } from "react";
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
import Axios from "axios";
import Shipcard from "./../../components/facecards/shipcard";
// interface LaunchProps {
//   id: string;
// }

const Shipspage: React.FC = () => {
  const [LaunchData, setLaunchData] = useState([]);
  const [APIdata, setAPIdata] = useState([]);
  const [Loadcount, setLoadcount] = useState(2);

  const callApi = () => {
    Axios.get("https://api.spacexdata.com/v3/ships").then((res) => {
      setAPIdata(res.data);
      setLaunchData(res.data.slice(0, 10));
    });
  };

  const loadmore = () => {
    let arr = APIdata.slice(Loadcount * 5, Loadcount * 5 + 5);
    let newLaunchData = LaunchData.concat(arr);
    console.log(newLaunchData);
    setLaunchData(newLaunchData);
    setLoadcount(Loadcount + 1);
  };

  useEffect(() => {
    callApi();
    console.log("Laucnhepads UseEffect Called");
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Ships</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Ships</IonTitle>
          </IonToolbar>
        </IonHeader>
        {LaunchData.map((one, index) => {
          return <Shipcard {...one} key={index} />;
        })}
        <IonButton onClick={loadmore} expand='block'>
          Load More Data ...
        </IonButton>
      </IonContent>
    </IonPage>
  );
  //return <h1>Hello</h1>;
};

export default Shipspage;

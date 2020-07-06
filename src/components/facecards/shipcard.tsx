import React from "react";
import { IonButton, IonCard } from "@ionic/react";
import { home } from "ionicons/icons";

interface LaunchCardProps {
  ship_id: string;
  ship_name: string;
  ship_type: string;
  year_built: number;
  home_port: string;
  image: string;
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
    <IonCard>
      <h4>This is Shipcard</h4>
      <h4>{`${ship_id} Name : ${ship_name} TYPE : ${ship_type} Year : ${year_built} HOOME : ${home_port}`}</h4>
      <img src={image} alt='' />
    </IonCard>
  );
};
export default Shipcard;

import React from 'react';
import { IonButton , IonCard } from '@ionic/react';

interface LaunchCardProps {
  flight_number : string;
  details : string;
  mission_name  :string;
}

const Launchcard: React.FC<LaunchCardProps> = ({
  flight_number,details,mission_name
}) => {
  return(
    <IonCard>
        <h4>Flight No : {flight_number}</h4>
        <h4>Details: {details}</h4>
        <h4>missionName : {mission_name}</h4>
    </IonCard>
  )
}
export default Launchcard;

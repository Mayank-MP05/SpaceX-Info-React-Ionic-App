import React from 'react';
import { useParams } from "react-router-dom";
interface LaunchProps {
  id: string;
}

const Launchpadcomponent: React.FC<LaunchProps> = () => {
  const { id } = useParams<{ id: string; }>();

  return (
    <div className="container">
      <h1>Launchpad Component with ID : {id}</h1>
    </div>
  );
};

export default Launchpadcomponent;

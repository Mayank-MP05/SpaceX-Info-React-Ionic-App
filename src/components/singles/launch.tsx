import React from 'react';
import { useParams } from "react-router-dom";
interface LaunchProps {
  id: string;
}

const Launchcomponent: React.FC<LaunchProps> = () => {
  const { id } = useParams<{ id: string; }>();

  return (
    <div className="container">
      <h1>Launch Component with ID : {id}</h1>
    </div>
  );
};

export default Launchcomponent;

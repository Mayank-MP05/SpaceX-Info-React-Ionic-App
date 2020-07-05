import React from 'react';
import { useParams } from "react-router-dom";
interface LaunchProps {
  id: string;
}

const Shipcomponent: React.FC<LaunchProps> = () => {
  const { id } = useParams<{ id: string; }>();

  return (
    <div className="container">
      <h1>Ship Component with ID : {id}</h1>
    </div>
  );
};

export default Shipcomponent;

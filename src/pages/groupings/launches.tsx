import React , { useEffect , useState} from 'react';
import Axios from "axios";
import { IonButton , IonCard } from '@ionic/react';
import LazyLoad from 'react-lazyload'
import Launchcard from './../../components/facecards/launchcard'
interface LaunchProps {
  id: string;
}


const Spinner = () => {
  return (
    <h6>This is LazyLoad Spinner</h6>
  )
}

const Launchspage: React.FC<LaunchProps> = () => {
  const [Loading, setLoading] = useState(true)
  const [LaunchData, setLaunchData] = useState([])
  
  const callApi = () => {
    Axios.get("https://api.spacexdata.com/v3/launches").then(res => {
      setLaunchData(res.data)
      setLoading(false)
    })
  }

  useEffect(() => {
    console.log("Laucnhes UseEffect Called")

  })
  return (
    <div className="container">
      <h1>Launch List Rendering ...</h1>
      <IonButton onClick={callApi}>Call the Apia</IonButton>
      {
        LaunchData.map((one,index) => {
          return <LazyLoad key={index} height={10} offset={[-100,100]} placeholder={<Spinner />}>
            <Launchcard {...one} key={index}/>
          </LazyLoad>
        })
      }

    </div>
  );
};

export default Launchspage;

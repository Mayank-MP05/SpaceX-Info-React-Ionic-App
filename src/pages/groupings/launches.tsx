import React , { useEffect , useState} from 'react';
import Axios from "axios";
import { IonButton, IonButtons, IonCard ,IonHeader , IonPage , IonToolbar,IonMenuButton , IonTitle ,IonContent} from '@ionic/react';
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
  const [APIdata, setAPIdata] = useState([])
  const [Loadcount, setLoadcount] = useState(2)

  const callApi = () => {
    Axios.get("https://api.spacexdata.com/v3/launches").then(res => {
      setAPIdata(res.data)
      setLaunchData(res.data.slice(0 , 10))
      setLoading(false)
    })
  }

  const loadmore = () => {
    let arr = APIdata.slice(Loadcount * 5 , Loadcount * 5 + 5)
    let newLaunchData = LaunchData.concat(arr)
    console.log(newLaunchData)
    setLaunchData(newLaunchData)
    setLoadcount(Loadcount + 1)
  }

  useEffect(() => {
    callApi()
    console.log("Laucnhes UseEffect Called")
  },[])
  return (
     <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Launches</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Launches</IonTitle>
          </IonToolbar>
        </IonHeader>
        {
          LaunchData.map((one,index) => {
            return <Launchcard {...one} key={index}/>
          })
        }
        <IonButton onClick={loadmore} expand='block'>Load More Data ...</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Launchspage;

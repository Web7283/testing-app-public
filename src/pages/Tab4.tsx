import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab4.css';

/*button*/
import { IonButton } from '@ionic/react';

import { IonIcon } from '@ionic/react';
import { add } from 'ionicons/icons';


const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 4</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 4</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 4 page" />
      <IonButton>
        <IonIcon slot="icon-only" icon={add}></IonIcon>
      </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;

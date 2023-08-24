import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import { Auth0Provider } from '@auth0/auth0-react';

import Intro from './intro/Intro.jsx';
import ItemMaster from './itemMaster/ItemMaster.jsx';
import FirmPage from './firmPage/FirmPage.jsx';
import ContractNote from './contractnote/contractNote.jsx';
import BrokerageNote from './brokerageBill/BrokerageBill.jsx';
import Settings from './settings/settings.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Auth0Provider
         domain="dev-xji5eg47yn4c4s74.us.auth0.com"
         clientId="5S7E6yaj1h2pbULN1XXUYEV2BtuwWubf"
         authorizationParams={{
           redirect_uri: window.location.origin
        }}
      >
        <Routes>
          <Route exact path='/' Component={Intro} />
          <Route exact path='/firmpage' Component={FirmPage} />
          <Route exact path='/itemmaster' Component={ItemMaster} />
          <Route exact path='/contractnote' Component={ContractNote}/>
          <Route exact path='/brokeragebill' Component={BrokerageNote}/>
          <Route exact path='/settings' Component={Settings}/>
        </Routes>
      </Auth0Provider>
    </>
  )
}

export default App

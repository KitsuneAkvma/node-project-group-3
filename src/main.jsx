import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import './index.css';

import Store, { persistor } from './redux/Store.js';

import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/wallet/">
    <Provider store={Store}>
      <PersistGate loading="null" persistor={persistor}>
        <App />
        
      </PersistGate>
    </Provider>
  </BrowserRouter>,
);

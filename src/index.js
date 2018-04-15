import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Stores
import authStore from './stores/authStore';

ReactDOM.render(
  <BrowserRouter>
    <App authStore={authStore}/>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();

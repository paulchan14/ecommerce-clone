import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/reset.css';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<BrowserRouter>
    <App />
</BrowserRouter>
, document.getElementById('root'));
// registerServiceWorker();

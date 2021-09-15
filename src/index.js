import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { unregister } from './registerServiceWorker';
import VConsole from 'vconsole';

// const vConsole = new VConsole();
// // or init with options
//
//
// console.log('Hello world');
//
// // remove it when you finish debugging
// vConsole.destroy();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
unregister();
// reportWebVitals();

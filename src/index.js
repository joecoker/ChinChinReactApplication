import React from 'react';
import ReactDOM from 'react-dom';

import './main.css';
import App from './App';

// import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

// serviceWorker.register();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').then(registration => {
      console.log('ServiceWorker registration successful with scope');
    }, err => {
      console.log('ServiceWorker registration failed');
    }).catch(err => {
      console.log(err)
    })
  })
} else {
  console.log('service worker is not supported');
}

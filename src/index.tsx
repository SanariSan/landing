import React from 'react';
import { hydrate, render } from 'react-dom';
import './index.scss';
import 'semantic-ui-css/semantic.min.css';
import { App } from './App';

const rootElement = document.getElementById('root') as HTMLElement;
if (rootElement.hasChildNodes()) {
  hydrate(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootElement,
  );
} else {
  render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootElement,
  );
}
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,

//   document.getElementById('root'),
// );

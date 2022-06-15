import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './app/layout/styles.css';
import App from './app/layout/App';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { store } from './app/store/configureStore';


export const history = createBrowserHistory();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter >
      <Provider store={store}>
        <App />
     
      </Provider>   
  </BrowserRouter>
  </React.StrictMode>
);



import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Containers/App/App';
import { store } from './Redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../src/Styles/style1.css'
import '../src/css/fontawesome-free-6.2.0-web/css/solid.min.css'
let history = createBrowserHistory();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HistoryRouter history={history}>
  <Provider store={store}>
    <App />
  </Provider>
  </HistoryRouter>
);

import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { fetchBusiness, fetchBusinesses } from './actions/business_actions';
// import { fetchBusiness, fetchBusinesses } from './util/business_api_util';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.store = store;
  window.fetchBusiness = fetchBusiness;
  window.fetchBusinesses = fetchBusinesses;


  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});

import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
// import { fetchBusiness, fetchBusinesses } from './actions/business_actions';
// import { fetchReviews  } from './util/reviews_api_util';
import { fetchReviews } from './actions/reviews_actions';



document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.store = store;
  window.fetchReviews = fetchReviews;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});

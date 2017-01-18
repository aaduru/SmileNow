import React from 'react';
import { Provider } from 'react-redux';

// react router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app/app';
import SessionFormContainer from './session_form/session_form_container';
import BusinessItemContainer from './business/business_item_container';
import BusinessesIndexContainer from './businesses/businesses_index_container';
import ReviewFormContainer from './reviews/review_form_container';
import SearchContainer from './search/search_container';
const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={BusinessesIndexContainer} />
          <Route path="/businesses/search" component={BusinessesIndexContainer} />
          <Route path="/businesses/:businessId" component={BusinessItemContainer}>
            <Route path="/businesses/:businessId/reviews"
              component={ReviewFormContainer} onEnter={_ensureLoggedIn} />
          </Route>
          <Route path="/login" component={SessionFormContainer}
                 onEnter={_redirectIfLoggedIn} />
          <Route path="/signup" component={SessionFormContainer}
                 onEnter={_redirectIfLoggedIn} />

        </Route>
      </Router>
    </Provider>
  );
};

export default Root;

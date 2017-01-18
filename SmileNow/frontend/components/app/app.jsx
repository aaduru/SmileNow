import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from '../greeting/greeting_container';
import SearchContainer from '../search/search_container';

const App = ({ children }) => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1 className="header_font">SmileNow
          <img src="/assets/logo4.png" className="header-image"/>
          </h1>
      </Link>
      <SearchContainer />
      <GreetingContainer />
    </header>
    <div>

    </div>
    {children}
  </div>
);

export default App;

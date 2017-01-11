import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from '../greeting/greeting_container';

const App = ({ children }) => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>SmileNow<img src="/assets/logo2.png" /></h1>
      </Link>
      <GreetingContainer />
    </header>
    {children}
  </div>
);

export default App;

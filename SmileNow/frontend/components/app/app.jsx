import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from '../greeting/greeting_container';
import SearchContainer from '../search/search_container';
import FilterFormContainer from '../search/filter_form_container';
import Credits from '../credits.jsx';

const App = ({ children }) => (
  <div>
    <header>
      <div >
        <div className="nav_bar">
          <Link to="/" className="header-link">
            <h1 className="header_font">SmileNow
              <img src="https://res.cloudinary.com/dzmqqopi9/image/upload/v1484179941/logo4_fjle77.png" className="header-image"/>
            </h1>
          </Link>
          <SearchContainer />
          <GreetingContainer />
        </div>
        <br />
        <br />
        <span className="filter_contents"><FilterFormContainer /></span>

      </div>
    </header>

    {children}

  </div>
);

export default App;

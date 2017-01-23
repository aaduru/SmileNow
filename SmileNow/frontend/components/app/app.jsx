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
    <footer>
      <div className="nav_bar">
        <span>
          <h3>Website designed by Ujwala Aaduru</h3>
        </span>
        <span>
          <a href="https://github.com/aaduru">
            <img src="http://res.cloudinary.com/dzmqqopi9/image/upload/v1485187130/GitHub_xqwzee.png" className="footer-image" />GitHub</a>
          </span>
          <span>
            <a href="https://www.linkedin.com/in/ujwala-aaduru-91578334">
              <img src="https://res.cloudinary.com/dzmqqopi9/image/upload/v1485187121/linkedin_hcue5i.png" className="footer-image" />linkedin</a>
            </span>
      </div>
    </footer>
  </div>
);

export default App;

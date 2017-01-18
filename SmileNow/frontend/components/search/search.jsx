import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    let searchquery= document.getElementById('searchInput').value;
    hashHistory.push({pathname: '/businesses/search', query: searchquery});
  }

  render (){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Search
            <input id='searchInput'
              className="search_input"
              type='text'
              placeholder='Enter the clinic name to search'/>
          </label>
          <button className="search_button">
            <img src="https://res.cloudinary.com/dzmqqopi9/image/upload/v1484737809/search_p7opzg.png"
              className="search_image" />
          </button>
        </form>
      </div>
    );
  }
}


export default withRouter(Search);

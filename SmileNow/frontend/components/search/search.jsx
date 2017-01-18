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
              type='text'
              placeholder='Enter the clinic name to search'/>
          </label>
          <button >Submit</button>
        </form>
      </div>
    );
  }
}


export default withRouter(Search);

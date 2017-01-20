import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

class FilterForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    const filterId = e.target.id;
    // console.log(e.target.id);
  
    const query_loc = Object.values(this.props.location.query).join('');
    console.log(query_loc);
    if (this.props.location.query){

      this.props.fetchBusinesses(query_loc, filterId);
      hashHistory.push({pathname: '/businesses/search', query: query_loc});

    }
    else {
      this.props.fetchBusinesses(null, filterId);
      hashHistory.push({pathname: '/businesses/filterId', query: filterId});
    }
  }

  render(){
    return (
        <form>
          <div className="filter_div">
            <span className="filter_item" id={1} onClick={this.handleClick}>Cosmetic Dentistry</span>
            <span className="filter_item" id={2} onClick={this.handleClick}>General Dentistry</span>
            <span className="filter_item" id={3} onClick={this.handleClick}>Pediatric Dentistry</span>
            <span className="filter_item" id={4} onClick={this.handleClick}>Endodontist</span>
            <span className="filter_item" id={5} onClick={this.handleClick}>Orthodontist</span>
            <span className="filter_item" id={6} onClick={this.handleClick}>Periodontist</span>
            <span className="filter_item" id={7} onClick={this.handleClick}>Oral & Maxillofacial Surgeon</span>
          </div>
        </form>
    );
  }
}

export default withRouter(FilterForm);

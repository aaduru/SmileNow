import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';

let _mapOptions = {
  center: {lat: 37.773972, lng: -122.431297},
  zoom: 13
};

class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, _mapOptions);
  }

  render() {

  }
}

export default withRouter(Map);

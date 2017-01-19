import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';

class BusinessesMap extends React.Component {

  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }
}

export default withRouter(BusinessesMap);

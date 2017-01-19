import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter, hashHistory  } from 'react-router';

class BusinessesMap extends React.Component {
  constructor(props) {
    super(props);
    this._handleMarkerClick = this._handleMarkerClick.bind(this);
  }

  componentDidMount() {
    const mapRef = this.refs.businessesMap;
    const mapCenter = { lat: 37.7758, lng: -122.435 }
    const options = {
      center: mapCenter,
      zoom: 12
    };

    this.map = new google.maps.Map(mapRef, options);

    const marker = new google.maps.Marker({
      position: mapCenter,
      map: this.map
    });
  }

  componentWillReceiveProps(nextProps) {

    nextProps.businesses.forEach( business => {
      let lat = business.latitude;
      let lng = business.longitude;

      const marker = new google.maps.Marker({
        position: {lat, lng},
        map: this.map,
        businessId: business.id
      });

      marker.addListener('click', () => this._handleMarkerClick(marker.businessId));
    });

  }


  _handleMarkerClick(businessId) {
     hashHistory.push({pathname: `businesses/${businessId}`});
   }

  render() {
    return (
      <div className="outer_Map">

        <div id="map_holder" ref="businessesMap">

        </div>
      </div>
    );
  }
}

export default BusinessesMap;

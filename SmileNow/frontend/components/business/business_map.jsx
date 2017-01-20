import React from 'react';
import ReactDOM from 'react-dom';

class BusinessMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const mapRef = this.refs.businessMap;
    let lat = this.props.business.latitude;
    let long = this.props.business.longitude;

    const mapCenter = { lat: lat, lng: long };
    const options = {
      center: mapCenter,
      zoom: 13
    };

    this.map = new google.maps.Map(mapRef, options);

    const marker = new google.maps.Marker({
      position: mapCenter,
      map: this.map
    });
  }

  render() {
    return (
      <div className="business_outer_map">

        <div id="map_business_holder" ref="businessMap">

        </div>
      </div>
    );
  }
}

export default BusinessMap;

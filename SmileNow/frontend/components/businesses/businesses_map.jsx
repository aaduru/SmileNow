import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter, hashHistory  } from 'react-router';

class BusinessesMap extends React.Component {
  constructor(props) {
    super(props);
    this._handleMarkerClick = this._handleMarkerClick.bind(this);
    this.markers = [];
    this.newMap = this.newMap.bind(this);
  }

  newMap(){
    const mapRef = this.refs.businessesMap;
    // const mapCenter = { lat: 37.7758, lng: -122.435 }
    const mapCenter = { lat: 37.759051, lng: -122.446786};
    const options = {
      center: mapCenter,
      zoom: 11
    };

    this.map = new google.maps.Map(mapRef, options);

  }
  componentDidMount() {
    this.newMap();
  }

  componentWillReceiveProps(nextProps) {
    // debugger
    this.newMap();
    nextProps.businesses.forEach( business => {
      let lat = business.latitude;
      let lng = business.longitude;

      let string = `${business.name}`;
      let infowindow = new google.maps.InfoWindow({
        content: string
      });

      const marker = new google.maps.Marker({
        position: {lat, lng},
        map: this.map,
        businessId: business.id
      });

      marker.addListener('click', () => this._handleMarkerClick(marker.businessId));

      marker.addListener('mouseover', () => {
        infowindow.open(this.map, marker);
        marker.setIcon('http://maps.google.com/mapfiles/ms/icons/blue-dot.png');
      });

      marker.addListener('mouseout', () => {
        infowindow.close();
        marker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');
      });
    });

    let string = `${nextProps.selected.name}`;
    let infowindow = new google.maps.InfoWindow({
      content: string
    });

    if (nextProps.selected.selected === "selected"){

      const marker = new google.maps.Marker({
        position: {lat: nextProps.selected.lat, lng: nextProps.selected.long},
        map: this.map,
        businessId: nextProps.selected.businessId
      });
      infowindow.open(this.map, marker);
      setTimeout(function() {infowindow.close();}, 3000);
      marker.setIcon('http://maps.google.com/mapfiles/ms/icons/blue-dot.png');
    }

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

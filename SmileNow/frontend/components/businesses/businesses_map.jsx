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

    // const marker = new google.maps.Marker({
    //   position: mapCenter,
    //   map: this.map
    // });
  }

  componentWillReceiveProps(nextProps) {

    nextProps.businesses.forEach( business => {
      let lat = business.latitude;
      let lng = business.longitude;

      let contentString = `${business.name}`;
      let infowindow = new google.maps.InfoWindow({
        content: contentString
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

    console.log(nextProps.selected);
    let contentString = `${nextProps.selected.name}`;
    let infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    if (nextProps.selected.selected === "selected"){

      const marker = new google.maps.Marker({
        position: {lat: nextProps.selected.lat, lng: nextProps.selected.long},
        map: this.map,
        businessId: nextProps.selected.businessId
      });
      infowindow.open(this.map, marker);
      setTimeout(function() {infowindow.close();}, 20000);
      marker.setIcon('http://maps.google.com/mapfiles/ms/icons/blue-dot.png');

    }else if (nextProps.selected.selected === null && nextProps.selected.businessId !== null){

      const marker = new google.maps.Marker({
        position: {lat: nextProps.selected.lat, lng: nextProps.selected.long},
        map: this.map,
        businessId: nextProps.selected.businessId
      });
      debugger
      infowindow.close();
      marker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');

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

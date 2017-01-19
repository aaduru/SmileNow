export default class MarkerManager {
  constructor(map, handleClick){
    this.map = map;
    this.handleClick = handleClick;
    this.markers = [];

    this._createMarkerFromBusiness = this._createMarkerFromBusiness.bind(this);
    this._removeMarker = this._removeMarker.bind(this);
    this._markersToRemove = this._markersToRemove.bind(this);
  }

  updateMarkers(businesses){
    this.businesses = businesses;
    this._businessesToAdd().forEach(this._createMarkerFromBusiness);
    this._markersToRemove().forEach(this._removeMarker);
  }

  _businessesToAdd() {
    const currentBusinesses = this.markers.map( marker => marker.businessId );
    return this.businesses.filter( business => !currentBusinesses.includes(business.id) );
  }

  _markersToRemove(){
    const businessesIds = this.businesses.map( business => business.id );
    return this.markers.filter( marker => !businessesIds.includes(marker.businessId) );
  }

  _createMarkerFromBusiness(business) {
    const pos = new google.maps.LatLng(business.latitude, business.longitude);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      businessId: business.id
    });
    marker.addListener('click', () => this.handleClick(business));
    this.markers.push(marker);
  }

  _removeMarker(marker) {
    const idx = this.markers.indexOf( marker );
    this.markers[idx].setMap(null);
    this.markers.splice(idx, 1);
  }
}

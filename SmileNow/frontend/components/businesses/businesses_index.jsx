import React from 'react';
import { Link, withRouter } from 'react-router';
import TagIndex from '../tag/tag_index';
import StarRatingComponent from 'react-star-rating-component';
import BusinessesMap from './businesses_map';

class BusinessesIndex extends React.Component {

  constructor (props){
    super(props);
    this.state = {selected: null, businessId: null, lat: null, long: null, name: null};

  }
  componentDidMount(){
    this.props.fetchBusinesses();
  }

  changeMap(id, lat, long, name) {
    this.setState({selected: "selected", businessId: id, lat: lat, long: long, name: name });
  }

  originalMap() {
    this.setState({selected: null});
  }

  render(){
    return (
      <div className="index_container">
        <div className="caption">
          <h1>Smile Now! will help you in finding the perfect dental care.</h1>
        </div>
        <div className="index_list_container">
          <div className="list_index_box">
            <ul>
              {
                this.props.businesses.map(businessIndex =>(
                  <li key={businessIndex.id} onMouseEnter={this.changeMap.bind(this, businessIndex.id, businessIndex.latitude, businessIndex.longitude, businessIndex.name)}
                      onMouseLeave={this.originalMap.bind(this, businessIndex.id, businessIndex.latitude, businessIndex.longitude, businessIndex.name)}>
                    <div className="list_index">
                      <div className="title_data">
                        <div>
                          <Link to={`/businesses/${businessIndex.id}`}>
                            <img src={businessIndex.business_image_url} className="image_box"/>
                          </Link>
                        </div>
                        <div className="title_box">
                          <Link to={`/businesses/${businessIndex.id}`} >{businessIndex.name}</Link>
                          <br />
                          <span>Review Rating:
                            <span >
                              <StarRatingComponent
                                  name="business_rating"
                                  starColor="#00ceff"
                                  emptyStarColor="#00ceff"
                                  starCount={5}
                                  value={Math.round(businessIndex.average_rating)}
                                  editing={false}
                                  renderStarIcon={(index, value) => {
                                    return <span className={index <= value ? 'fa fa-star' : 'fa fa-star-o'} />;
                                  }}
                              />
                            </span>
                          </span>
                          <br />
                          <span>No of Reviews: {businessIndex.count_rating}</span>
                          <span><TagIndex tags={businessIndex.tags}/></span>
                        </div>
                      </div>
                      <div className="address_box">
                        <ul>
                          <li>{businessIndex.street_address}</li>
                          <li>{businessIndex.city_state_address}, {businessIndex.zipcode}</li>
                          <li>{businessIndex.phone}</li>
                        </ul>
                      </div>
                    </div>
                  </li>))
                }
              </ul>
            </div>
            <div className="map_container" >
              <BusinessesMap businesses={this.props.businesses} selected={this.state}/>
            </div>
          </div>
      </div>
    );
  }
}

export default withRouter(BusinessesIndex);

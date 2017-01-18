import React from 'react';
import { Link, withRouter } from 'react-router';
import StarRatingComponent from 'react-star-rating-component';

class BusinessesIndex extends React.Component {
  constructor (props){
    super(props);
  }
  componentDidMount(){
    this.props.fetchBusinesses();
  }

  componentWillReceiveProps(nextProps) {
    const sr = Object.values(this.props.location.query).join('');

    if (this.props.location !== nextProps.location){
      this.props.fetchBusinesses(sr, nextProps.filterId);
    }
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
                  <li key={businessIndex.id} >
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
            <div className="map_container">
              <h1>Will display map Here</h1>
            </div>
          </div>
      </div>
    );
  }
}

export default withRouter(BusinessesIndex);

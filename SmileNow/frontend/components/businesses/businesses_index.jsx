import React from 'react';
import { Link, withRouter } from 'react-router';
import TagIndex from '../tag/tag_index';
import StarRatingComponent from 'react-star-rating-component';
import BusinessesMap from './businesses_map';

class BusinessesIndex extends React.Component {

  constructor (props){
    super(props);
    this.state = {selected: null, businessId: null, lat: null, long: null, name: null};
    this.searchquery;
    this.searchResponse;
  }
  componentDidMount(){
    this.props.fetchBusinesses();
    this.mapScroll();
  }

  componentWillUnmount() {
    // document.documentElement.removeEventListener('scroll', this.mapScroll());
    $(window).off('scroll', this.scrollTop);
  }

  componentWillReceiveProps(nextProps){
    if (this.props.location.pathname !== nextProps.location.pathname && nextProps.location.pathname === '/') {

      this.props.fetchBusinesses();
      this.searchResponse = "";
    }
    this.searchquery = Object.values(nextProps.location.query).join('');

    if (Object.values(nextProps.location.query).join('') !== "" && nextProps.businesses.length === 0){
      this.searchResponse = "No Results for this search query ";
    } else if (Object.values(nextProps.location.query).join('') !== "" && nextProps.businesses.length !== 0) {
      this.searchResponse = "";
      this.searchquery = "";
    }

  }

  changeMap(id, lat, long, name) {
    this.setState({selected: "selected", businessId: id, lat: lat, long: long, name: name });
  }

  originalMap() {
    this.setState({selected: null});
  }

  mapScroll() {

    this.scrollTop = function(){
             // debugger
       var stickyMapTop = $('.map_container').offset().top;
       var viewportWidth = $(window).width();
       var mainTop = $('.main_caption').offset().top;
       var mainHeight = $('.main_caption').height();
       var mainBottom = mainTop + mainHeight;

       if($(window).scrollTop() > mainBottom) {
           $('.map_container').css({position: 'fixed', top: '0px', 'margin-top': '10px', 'margin-bottom': '10px', height: '92%'});
       } else if ( $(window).scrollTop() <= mainBottom )  {
           $('.map_container').css({position: 'relative', height: '430px', overflow: 'hidden'});
       }

     };

     $(window).scroll(this.scrollTop) ;

  }

  render(){

    return (
      <div className="index_container">
        <div className="caption">
          <h1 id="main_caption" className="main_caption">Find the Perfect Dental care with SmileNow!</h1>
        </div>
        <div className="container">

          <div className="index_list_container">

            <div className="list_index_box">
              <span className="search_response">
                {this.searchResponse}
                {this.searchquery}
              </span>
              <ul>
                { this.props.businesses.map(businessIndex =>(
                  <li key={businessIndex.id} onMouseEnter={this.changeMap.bind(this, businessIndex.id, businessIndex.latitude, businessIndex.longitude, businessIndex.name)}
                    onMouseLeave={this.originalMap.bind(this, businessIndex.id, businessIndex.latitude, businessIndex.longitude, businessIndex.name)}>
                    <div className="space_box">
                      <div className="businesses_index">
                        <div className="list_index">
                          <div className="title_data">
                            <div className="image_div_box">
                              <Link to={`/businesses/${businessIndex.id}`}>
                                <img src={businessIndex.business_image_url} className="image_box"/>
                              </Link>
                            </div>
                            <div className="title_box">
                              <h1 className="business_title">
                                <Link to={`/businesses/${businessIndex.id}`} >{businessIndex.name}</Link>
                              </h1>
                              <div className="rating_review_star">
                                <div className="des_box">
                                  <h3 className="rating_des">Rating:
                                  </h3>
                                </div>
                                <div className="star_box">
                                  <span className="rating_star">
                                    <StarRatingComponent
                                      name="business_rating"
                                      starColor="#00ceff"
                                      emptyStarColor="#00ceff"
                                      starCount={5}
                                      value={Math.round(businessIndex.average_rating)}
                                      editing={false}
                                      renderStarIcon={(index, value) => {
                                        return <span className={index <= value ? 'fa fa-star' : 'fa fa-star-o'} />;
                                      }} />
                                    </span>
                                  </div>
                                </div>
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
                          <div>
                            <span><TagIndex tags={businessIndex.tags}/></span>
                          </div>
                        </div>
                    </div>
                  </li>))}
              </ul>
            </div>
            <div className="map_container_outer">
              <div className="map_container" id="map_container"  >
                <BusinessesMap businesses={this.props.businesses} selected={this.state}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(BusinessesIndex);

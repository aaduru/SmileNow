import React from 'react';
import { Link, withRouter } from 'react-router';
import ReviewIndex from '../reviews/review_index';
import TagIndex from '../tag/tag_index';
import ReviewFormContainer from '../reviews/review_form_container';
import StarRatingComponent from 'react-star-rating-component';
import BusinessMap from './business_map';

class BusinessItem extends React.Component {
  constructor (props){
    super(props);
    this.reviewForm = this.reviewForm.bind(this);
  }

  componentDidMount(){
    this.props.fetchBusiness();
  }

  reviewForm(e) {
    e.preventDefault();
    const url = `/businesses/${this.props.business.id}/reviews`;
    this.props.router.push(`${url}`);
  }

  render(){

    if (this.props.business.business_info === undefined || this.props.business.reviews === undefined || this.props.business.tags === undefined){
      return (
        <div>
        </div>
      );
    }

    return (
      <div className="business_item_box">
        <div className="name_box">
          <div className="name_display">
            <h1 className="h1_name_display">{this.props.business.name}</h1>
            <p>{this.props.business.description}</p>
            <span className="business_tags">
              <TagIndex tags={this.props.business.tags}/>
            </span>
          </div>
            <div className="rating_display">
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
                        value={Math.round(this.props.business.average_rating)}
                        editing={false}
                        renderStarIcon={(index, value) => {
                          return <span className={index <= value ? 'fa fa-star' : 'fa fa-star-o'} />;
                        }} />
                  </span>
                </div>
              </div>

            <span className="review_details">No of Reviews: </span>
              <span >
              {this.props.business.count_rating || "No reviews yet"}
            </span>
            <br />

            <button onClick={this.reviewForm} className="review_button" >
              <img src="https://res.cloudinary.com/dzmqqopi9/image/upload/v1484933913/star_smxfvk.png"  className="star_image"/>
              Write a Review
            </button>
              {this.props.children}
          </div>
        </div>
        <div className="item_box">
          <div className="add_box">
            <div className="map_item_box">
                <BusinessMap business={this.props.business} />
            </div>
            <div className="business_address">
              <ul>
                <li><img src="https://res.cloudinary.com/dzmqqopi9/image/upload/v1484585081/map_zuoll0.png"  className="logo_image"/>
                    {this.props.business.street_address}</li>
                <li>{this.props.business.city_state_address}, {this.props.business.zipcode}</li>
                <li><img src="https://res.cloudinary.com/dzmqqopi9/image/upload/v1484585086/phone_exjpkc.png" className="logo_image" />
                    {this.props.business.phone}</li>
              </ul>
            </div>
          </div>
          <div className="info_and_image">
            <div  className="image_index_box">
              <img src={this.props.business.business_image_url} className="img_index_box"/>
            </div>
            <div className="more_info_box">
              <h1 className="h1_display">More Clinic Information </h1>
              <br />
              <ul>
                <li className="info_display">
                  Accept Credit cards:
                  <span className="more_info_bold">{this.props.business.business_info.accept_credit_card}</span>
                </li>
                <li className="info_display">
                  Accept Insurance:
                  <span className="more_info_bold">{this.props.business.business_info.accept_insurance}</span>
                </li>
                <li className="info_display">
                  By Appointment Only:
                  <span className="more_info_bold">{this.props.business.business_info.by_appointment_only}</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
        <div className="extra_info_box">
          <div className="review_box">
            <ReviewIndex reviews={this.props.business.reviews}/>
          </div>

        </div>

      </div>

    );
  }
}

export default withRouter(BusinessItem);

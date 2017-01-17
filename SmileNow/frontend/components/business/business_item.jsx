import React from 'react';
import { Link, withRouter } from 'react-router';
import ReviewIndex from '../reviews/review_index';
import ReviewFormContainer from '../reviews/review_form_container';

class BusinessItem extends React.Component {
  constructor (props){
    super(props);
    this.reviewForm = this.reviewForm.bind(this);

  }

  componentDidMount(){
    this.props.fetchBusiness();
    this.props.fetchReviews();
  }

  reviewForm(e) {
    debugger
    e.preventDefault();
    const url = `/businesses/${this.props.business.id}/reviews`;
    this.props.router.push(`${url}`);
  }

  render(){

    if (this.props.business.business_info === undefined || this.props.business.reviews === undefined){
      return (
        <div>

        </div>
      );
    }

    return (
      <div>
        <div className="name_box">
          <ul>
            <li>
              <h1>{this.props.business.name}</h1>
              <p>{this.props.business.description}</p>
              <span>Rating: </span>
              <span >
              {this.props.business.average_rating || "No reviews yet"}
            </span>
            <br />
            <span>No of Reviews: </span>
              <span >
              {this.props.business.count_rating || "No reviews yet"}
            </span>
            </li>
          </ul>
          <button onClick={this.reviewForm}>Write a Review</button>
          {this.props.children}
        </div>
        <div className="item_box">
          <div className="address_box">
            <div className="map_item_box">
              <p>map will go here</p>
            </div>
            <div className="business_address">
              <ul>
                <li><img src="http://res.cloudinary.com/dzmqqopi9/image/upload/v1484585081/map_zuoll0.png"  className="logo_image"/>
                    {this.props.business.street_address}</li>
                <li>{this.props.business.city_state_address}, {this.props.business.zipcode}</li>
                <li><img src="http://res.cloudinary.com/dzmqqopi9/image/upload/v1484585086/phone_exjpkc.png" className="logo_image" />
                    {this.props.business.phone}</li>
              </ul>
            </div>
          </div>
          <div  className="image_index_box">
            <img src={this.props.business.business_image_url} className="img_index_box"/>
          </div>
        </div>
        <div className="extra_info_box">
          <div className="review_box">
            <ReviewIndex reviews={this.props.business.reviews}/>
          </div>
          <div className="more_info_box">
            <h1 className="h1_display">More Clinic Information </h1>
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

    );
  }
}

export default withRouter(BusinessItem);

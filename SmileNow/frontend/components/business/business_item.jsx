import React from 'react';
import { Link, withRouter } from 'react-router';

class BusinessItem extends React.Component {
  constructor (props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchBusiness();
  }

  render(){


    if (this.props.business.business_info === undefined){
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
            </li>
          </ul>
        </div>
        <div className="item_box">
          <div className="address_box">
            <ul>
              <li>{this.props.business.street_address}</li>
              <li>{this.props.business.city_state_address}, {this.props.business.zipcode}</li>
              <li>{this.props.business.phone}</li>
            </ul>
          </div>
          <div  className="image_box">
            <img src={this.props.business.business_image_url} />
          </div>
        </div>
        <div className="more_info_box">
          <h1 className="h1_display">More Clinic Information </h1>
          <ul>
            <li className="info_display"> Accept Credit cards: {this.props.business.business_info.accept_credit_card} </li>
            <li> Accept Insurance: {this.props.business.business_info.accept_insurance} </li>
            <li> By Appointment Only: {this.props.business.business_info.by_appointment_only} </li>
          </ul>
        </div>
      </div>

    );
  }
}

export default BusinessItem;

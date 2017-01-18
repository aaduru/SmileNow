import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

class ReviewIndexItem extends React.Component {

  constructor(props){
    super(props);
  }

  render() {

    return (
        <div className="review_box">
          <div className="review_item">
            <div className="reviewername_box">
              <h1>{this.props.review.user.username}</h1>
            </div>
            <div className="review_contents">
              <h3>Rating:  {this.props.review.rating}
              </h3>
              <p>{this.props.review.content}</p>
            </div>
          </div>

        </div>


    );
  }
}

export default ReviewIndexItem;

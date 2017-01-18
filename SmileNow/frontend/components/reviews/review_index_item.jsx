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
              <h3>Rating:
                <span >
                  <StarRatingComponent
                      name="business_rating"
                      starColor="#00ceff"
                      emptyStarColor="#00ceff"
                      starCount={5}
                      value={Math.round(this.props.review.rating)}
                      editing={false}
                      renderStarIcon={(index, value) => {
                        return <span className={index <= value ? 'fa fa-star' : 'fa fa-star-o'} />;
                      }} />
                </span>
              </h3>
              <p>{this.props.review.content}</p>
            </div>
          </div>

        </div>


    );
  }
}

export default ReviewIndexItem;

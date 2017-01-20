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
                        value={Math.round(this.props.review.rating)}
                        editing={false}
                        renderStarIcon={(index, value) => {
                          return <span className={index <= value ? 'fa fa-star' : 'fa fa-star-o'} />;
                        }} />
                  </span>
                </div>
              </div>
            </div>
            <div className="review_contents">
              <p>{this.props.review.content}</p>
            </div>
          </div>

        </div>


    );
  }
}

export default ReviewIndexItem;

import React from 'react';
import ReviewIndexItem from './review_index_item';


class ReviewIndex extends React.Component {

  render() {
    return (
      <div>
        <h1 className="h1_display">REVIEWS</h1>
        {this.props.reviews.map(review => (
          <ReviewIndexItem key={review.id} review={review}/>
        ))}
      </div>
    );
  }
}

export default ReviewIndex;

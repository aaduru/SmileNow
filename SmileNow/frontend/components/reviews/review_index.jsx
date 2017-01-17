import React from 'react';
import ReviewIndexItem from './review_index_item';


class ReviewIndex extends React.Component {

  render() {
    return (
      <div>
        <h1 className="h1_display">REVIEWS</h1>
        {Object.keys(this.props.reviews).map((review_key) => (
          <ReviewIndexItem key={review_key} review={this.props.reviews[review_key]}/>
        ))}
      </div>
    );
  }
}

export default ReviewIndex;

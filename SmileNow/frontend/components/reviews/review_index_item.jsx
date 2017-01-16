import React from 'react';

class ReviewIndexItem extends React.Component {

  constructor(props){
    super(props);
  }

  render() {

    return (
      <div >
        <div>
          <p>by: {this.props.review.user.username}</p>
              {this.props.review.rating}
        </div>
        <p>{this.props.review.context}</p>
      </div>
    );
  }
}

export default ReviewIndexItem;

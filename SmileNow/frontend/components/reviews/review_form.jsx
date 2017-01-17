import React from 'react';
import { withRouter } from 'react-router';
import StarRatingComponent from 'react-star-rating-component';
import merge from 'lodash/merge';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rating: 3.5, content: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onStarClick(nextValue, prevValue, name) {
       this.setState({rating: nextValue});
   }

  update(property) {
    return e => this.setState(merge(this.state, { content: e.currentTarget.value }));
  }

  backToBusinessPage(){
    const url = `/businesses/${this.props.params.businessId}`;
    this.props.router.push(`${url}`);

  }

  handleSubmit(e) {
    e.preventDefault();
    const businessID = parseInt(this.props.params.businessId);
    const newReview = { rating: this.state.rating, content: this.state.content, business_id: businessID };
    this.props.createReview(businessID, newReview);
    this.backToBusinessPage();
}

  render() {
    const { rating } = this.state.rating;
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Rating
            <div>
              <StarRatingComponent
                name="rate1"
                starColor="#ffb400"
                emptyStarColor="#ffb400"
                starCount={5}
                value={this.state.rating}
                renderStarIcon={(index, value) => {
                  return <span className={index <= value ? 'fa fa-star' : 'fa fa-star-o'} />;
                }}
                renderStarIconHalf={() => <span className="fa fa-star-half-full" />}
                onStarClick={this.onStarClick.bind(this)}
                />
            </div>
          </label>
          <label>Review
            <br/>
          <textarea
            cols='30'
            rows='10'
            value={ this.state.body }
            onChange={ this.update("content") }></textarea>
          </label>
          <button>SUBMIT</button>
        </form>
      </div>
    );
  }
}

export default withRouter(ReviewForm);

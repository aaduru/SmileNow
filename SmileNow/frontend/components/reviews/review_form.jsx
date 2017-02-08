import React from 'react';
import { withRouter } from 'react-router';
import StarRatingComponent from 'react-star-rating-component';
import merge from 'lodash/merge';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rating: 3, content: ""};
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
    // this.backToBusinessPage();
}

  renderErrors() {
    // debugger
    if (this.props.errors) {

      return(
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }else {
      return(
        <div>

        </div>
      );
    }
  }

  render() {
    const { rating } = this.state.rating;
    return(
      <div className="reviewform_div">
        <form onSubmit={this.handleSubmit}>
          <div className="login-errors">
            {this.renderErrors()}
          </div>
          <label className="review_label">Rating</label>
            <div>
              <StarRatingComponent
                name="rate1"
                starColor="$regular"
                emptyStarColor="$regular"
                starCount={5}
                value={this.state.rating}
                renderStarIcon={(index, value) => {
                  return <span className={index <= value ? 'fa fa-star' : 'fa fa-star-o'} />;
                }}
                />
            </div>

          <br />
          <label className="review_label">Review</label>
          <br />
          <textarea
            cols='30'
            rows='10'
            value={ this.state.body }
            onChange={ this.update("content") }></textarea>

          <br />

          <div className="review_buttons">
            <button className="write_review">SUBMIT</button>
            <button className="write_review" onClick={this.backToBusinessPage.bind(this)}>CANCEL</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(ReviewForm);

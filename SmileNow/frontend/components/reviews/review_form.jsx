import React from 'react';
import { withRouter } from 'react-router';
import StarRatingComponent from 'react-star-rating-component';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rating: 3.5, content: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onStarClick(nextValue, prevValue, name) {
       this.setState({rating: nextValue});
   }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }


  handleSubmit(e) {
    e.preventDefault();
    const newReview = { rating: this.state.rating, content: this.state.content };
    this.props.createReview(this.props.businessId, newReview).then(() => {
      this.setState({ rating: 0, content: ""});
  }

  render() {
    const {rating} = this.state.rating;
    return(
      <div>
        <form>
          <label>Rating
            <div>
              <StarRatingComponent
                name="rate1"
                starColor="#ffb400"
                emptyStarColor="#ffb400"
                starCount={5}
                value={rating}
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

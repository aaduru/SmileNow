import { connect } from 'react-redux';

import { fetchBusinesses } from '../../actions/business_actions';
import BusinessesReducer from '../../reducers/businesses_reducer';

import BusinessesIndex from './businesses_index';

const mapStateToProps = state => ({
  businesses: Object.keys(state.businesses).map(id => state.businesses[id]),
  reviews: state.reviews,
  tags: state.tags

});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchBusinesses: (search, filterId) => dispatch(fetchBusinesses(search, filterId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessesIndex);

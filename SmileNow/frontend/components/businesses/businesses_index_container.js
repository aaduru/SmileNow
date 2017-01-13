import { connect } from 'react-redux';

import { fetchBusinesses } from '../../actions/business_actions';
import BusinessesReducer from '../../reducers/businesses_reducer';

import BusinessesIndex from './businesses_index';

const mapStateToProps = state => ({
  businesses: Object.keys(state.businesses).map(id => state.businesses[id])

});

const mapDispatchToProps = dispatch => ({
  fetchBusinesses: () => dispatch(fetchBusinesses())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessesIndex);

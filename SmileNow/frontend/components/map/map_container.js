import { connect } from 'react-redux';
import Map from './map';

const mapStateToProps = state => ({
  businesses: state.businesses,
  business: state.business
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);

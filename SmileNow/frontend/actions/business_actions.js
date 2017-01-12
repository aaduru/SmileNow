import * as APIUtil from '../util/business_api_util';

export const RECEIVE_BUSINESSES = "RECEIVE_BUSINESSES";
export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";

export const fetchBusinesses = () => dispatch => (
  APIUtil.fetchBusinesses()
    .then(businesses => dispatch(receiveBusinesses(businesses)))
);

export const fetchBusiness = id => dispatch => (
  APIUtil.fetchBusiness(id)
    .then(business => dispatch(receiveBusiness(business)))
);


export const receiveBusinesses = buisnesses => ({
  type: RECEIVE_BUSINESSES,
  buisnesses
});

export const receiveBusiness = business => ({
  type: RECEIVE_BUSINESS,
  business
});

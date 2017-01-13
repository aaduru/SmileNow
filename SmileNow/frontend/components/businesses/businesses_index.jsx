import React from 'react';
import { Link, withRouter } from 'react-router';

class BusinessesIndex extends React.Component {
  constructor (props){
    super(props);
  }
  componentDidMount(){
    this.props.fetchBusinesses();
  }

  render(){
    return (
      <div>
        <ul>
          {
            this.props.businesses.map(businessIndex =>(
              <li>
                {businessIndex.name}
                <img src={businessIndex.business_image_url} />
              </li>))
          }
        </ul>
      </div>
    );
  }
}

export default BusinessesIndex;

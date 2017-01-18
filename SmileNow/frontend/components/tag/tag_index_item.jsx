import React from 'react';

class TagIndexItem extends React.Component {

  constructor(props){
    super(props);
  }

  render() {

    return (
        <div className="review_box">
          <p>{this.props.tag.name}</p>
        </div>


    );
  }
}

export default TagIndexItem;

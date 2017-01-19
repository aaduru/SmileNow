import React from 'react';

class TagIndexItem extends React.Component {

  constructor(props){
    super(props);

  }

  render() {

    return (
        <div className="filter_display">
          <ul>
            <li className="filter_list">{this.props.tag.name}</li>
          </ul>
        </div>


    );
  }
}

export default TagIndexItem;

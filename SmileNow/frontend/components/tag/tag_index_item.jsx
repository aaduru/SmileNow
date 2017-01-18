import React from 'react';

class TagIndexItem extends React.Component {

  constructor(props){
    super(props);

  }

  render() {

    return (
        <div className="">
          <ul>
            <li>
              {this.props.tag.name}
            </li>
          </ul>
        </div>


    );
  }
}

export default TagIndexItem;

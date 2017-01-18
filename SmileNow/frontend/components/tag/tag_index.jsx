import React from 'react';
import TagIndexItem from './tag_index_item';


class TagIndex extends React.Component {

  render() {
    return (
      <div>
        <p>
          {Object.keys(this.props.tags).map((tag_key) => (
            <TagIndexItem key={tag_key} tag={this.props.tags[tag_key]}/>
          ))}
        </p>
      </div>
    );
  }
}

export default TagIndex;

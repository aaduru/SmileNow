import React from 'react';
import TagIndexItem from './tag_index_item';


class TagIndex extends React.Component {

  render() {
    return (
      <div>
        <h1 className="h1_display">
          {Object.keys(this.props.tags).map((tag_key) => (
            <TagIndexItem key={tag_key} tag={this.props.tags[tag_key]}/>
          ))}
        </h1>
      </div>
    );
  }
}

export default TagIndex;

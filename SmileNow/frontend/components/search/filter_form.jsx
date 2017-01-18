import React from 'react';
import FilterFormItem from './review_filter_form';

class FilterForm extends React.component {
  constructor (props) {
    super(props);
  }

  render(){
    return (
      <div>
        <h1>tags</h1>
          {Object.keys(this.props.tags).map((tag_key) => (
            <FilterFormItem key={tag_key} tag={this.props.tags[tag_key]}/>
          ))}
      </div>
    );
  }
}

export default FilterForm;

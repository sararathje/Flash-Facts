import React from 'react';
import PropTypes from 'prop-types';

class Option extends React.Component {
  propTypes: {
    type: React.PropTypes.string,
    onSelectOption: React.PropTypes.func
  };

  static defaultProps: {
    type: '',
    onSelectOption: () => ({})
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="option" onClick={this.props.onSelectOption}>
        <div className="title">{this.props.type}</div>
      </div>
    );
  }
}

export default Option;

import React from 'react';
import PropTypes from 'prop-types';

class Option extends React.Component {
  propTypes: {
    type: PropTypes.string
  };

  static defaultProps: {
    type: ''
  };

  render() {
    return (
      <div className="option">
        <div className="title">{this.props.type}</div>
      </div>
    );
  };
}

Option.propTypes = {
  type: PropTypes.string
}

export default Option;

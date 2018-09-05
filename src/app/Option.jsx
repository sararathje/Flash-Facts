import React from 'react';
import PropTypes from 'prop-types';

class Option extends React.Component {
  propTypes: {
    type: React.PropTypes.string,
    optionClassName: React.PropTypes.string,
    onSelectOption: React.PropTypes.func
  };

  static defaultProps: {
    type: '',
    optionClassName: '',
    onSelectOption: () => ({})
  };

  constructor(props) {
    super(props);
  }

  getOptionClassNames() {
    return `option ${this.props.optionClassName}`
  }

  render() {
    return (
      <div className={this.getOptionClassNames()} onClick={this.props.onSelectOption}>
        <div className="title">{this.props.type}</div>
      </div>
    );
  }
}

export default Option;

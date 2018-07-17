import React from 'react';
import InlineSVG from 'svg-inline-react';

class MathFacts extends React.Component {
  propTypes: {
    onSelectBackOption: React.PropTypes.func
  };

  static defaultProps: {
    onSelectBackOption: () => ({})
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="math-facts">MATH FACTS
        <div className="back-button" onClick={this.props.onSelectBackOption}>
          Back
        </div>
      </div>
    );
  }
}

export default MathFacts;

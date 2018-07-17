import React from 'react';
import InlineSVG from 'svg-inline-react';

const SIGHT_WORDS = require('./sightWords');

class SightWords extends React.Component {
  propTypes: {
    onSelectBackOption: React.PropTypes.func
  };

  static defaultProps: {
    onSelectBackOption: () => ({})
  };

  constructor(props) {
    super(props);
  }

  // render() {
  //   return (
  //     <div id="math-facts">SIGHT WORDS
  //       <div className="back-button" onClick={this.props.onSelectBackOption}>
  //         <InlineSVG src={require("svg-inline-loader?classPrefix!../svg/back-arrow-3.svg")} />
  //       </div>
  //     </div>
  //   );
  // }
  render() {
    return (
      <div id="sight-words">SIGHT WORDS
        <div className="back-button" onClick={this.props.onSelectBackOption}>
          Back
        </div>
      </div>
    );
  }
}

export default SightWords;

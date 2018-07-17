import React from 'react';
import InlineSVG from 'svg-inline-react';

const _ = require('lodash');
const SIGHT_WORDS = require('./sightWordsConstants');

class SightWords extends React.Component {
  propTypes: {
    onSelectBackOption: React.PropTypes.func
  };

  static defaultProps: {
    onSelectBackOption: () => ({})
  };

  constructor(props) {
    super(props);

    this.state = {
      words: []
    };

    // this.showGradeSightWords = this.showGradeSightWords.bind(this);
  }

  // Eventually this should show the grade words... I think I'm having trouble
  // with some 'this' issues. A problem for another day's Sara
  showGradeSightWords() {
    this.setState((prevState, props) => {
      return {
        words: gradeWords 
      };
    });
  }

  renderWords() {
    let self = this;
    let gradeWords = [];

    _.forEach(self.state.words, function(word) {
      gradeWords.push(
        <div className="word">{word}</div>
      );
    });

    return gradeWords;
  }

  renderGradesSelection() {
    let grades = [];

    _.forEach(SIGHT_WORDS.sightWords, function(grade) {
      grades.push(
        <div className="grade">
          {grade.name}
        </div>
      );
    });

    return grades;
  }

  render() {
    return (
      <div id="sight-words">
        <div className="back-button" onClick={this.props.onSelectBackOption}>
            Back
          </div>
        <div className="header">
          <div className="header-title">SIGHT WORDS</div>
        </div>
        <div className="body">
          <div className="grades-selection">{this.renderGradesSelection()}</div>
          <div className="grade-words">{this.renderWords()}</div>
        </div>
      </div>
    );
  }
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

export default SightWords;

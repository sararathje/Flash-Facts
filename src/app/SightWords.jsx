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
  }

  // Eventually this should show the grade words... I think I'm having trouble
  // with some 'this' issues. A problem for another day's Sara
  showGradeSightWords(grade) {
    this.setState({
        words: grade.words
    });
  }

  renderWords() {
    let self = this;
    let gradeWords = [];

    _.forEach(self.state.words, function(word, index) {
      gradeWords.push(
        <div key={index} className="word">{word}</div>
      );
    });

    return gradeWords;
  }

  renderGradesSelection() {
    let grades = [];

    _.forEach(SIGHT_WORDS.sightWords, (grade, index) => {
      const showGradeWords = () => this.showGradeSightWords(grade);
      grades.push(
        <div key={index} className="grade" onClick={showGradeWords}>
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

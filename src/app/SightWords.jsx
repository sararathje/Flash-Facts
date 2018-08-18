import React from 'react';
// Sara: Currently this isn't working... needs more investigation
import InlineSVG from 'svg-inline-react';
import { sightWords } from './sightWordsConstants';

const _ = require('lodash');
const SHUFFLE = require('knuth-shuffle').knuthShuffle;

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
      selectedGrade: '',
      started: false,
      shuffle: false,
      words: [],
      wordIndex: 0
    };
  }

  getGradeClassNames(grade) {
    return this.state.selectedGrade.name === grade.name ? `grade selected` : `grade`;
  }

  getShuffledWords() {
    return SHUFFLE(this.state.selectedGrade.words.slice(0));
  }

  showGradeSightWords(grade) {
    this.setState({
      selectedGrade: grade,
      started: false,
      shuffle: false,
      wordIndex: 0
    });
  }

  displayNextWord() {
    this.setState((prevState, props) => {
      return {wordIndex: prevState.wordIndex + 1};
    });
  }

  // TODO: Sara: The current way that you switch between shuffled words and ordered words
  // is kinda poo. Update the way that you do this so that you don't have gross duplication
  toggleShuffle() {
    this.setState((prevState, props) => {
      // If the previous shuffle state was false, then we want to update the words to be
      // shuffled.
      const updatedWords =
        prevState.shuffle === false ? this.getShuffledWords() : prevState.selectedGrade.words;

      return {
        shuffle: !prevState.shuffle,
        words: updatedWords,
        wordIndex: 0
      }
    });
  }

  updateStarted() {
    const updatedWords =
      this.state.shuffle === true ? this.getShuffledWords() : this.state.selectedGrade.words;

    this.setState({
      started: true,
      words: updatedWords,
      wordIndex: 0
    });
  }

  getShuffleClassNames() {
    return this.state.shuffle === true ? `shuffle-button enabled` : `shuffle-button`;
  }

  getWord() {
    return this.state.words[this.state.wordIndex];
  }

  renderStart() {
    return (
      <div className="start-screen">
        <div className="start-button" onClick={() => {this.updateStarted()}}>Start</div>
        <div className={this.getShuffleClassNames()} onClick={() => {this.toggleShuffle()}}>Shuffle</div>
      </div>
    );
  }

  renderWord() {
    return (
      <div className="grade-words">
        <div className="word-wrapper">
          <p className="word">{this.getWord()}</p>
        </div>
        <div className={this.getShuffleClassNames()} onClick={() => {this.toggleShuffle()}}>Shuffle</div>
        <div className="next-button" onClick={() => {this.displayNextWord()}}>Next</div>
      </div>
    );
  }

  // Sara: this method is too long, but you can fix that later
  // Should also rename, but can also deal with that later
  renderWords() {
    if (!_.isEmpty(this.state.selectedGrade)) {
      return this.state.started === true ? this.renderWord() : this.renderStart();
    }

    // Don't render anything if no grade is selected
    return false;
  }

  renderGradesSelection() {
    let grades = [];

    _.forEach(sightWords, (grade, index) => {
      const showGradeWords = () => this.showGradeSightWords(grade);

      grades.push(
        <div key={index} className={this.getGradeClassNames(grade)} onClick={showGradeWords}>
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
          {this.renderWords()}
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

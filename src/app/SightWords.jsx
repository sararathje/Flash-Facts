import React from 'react';
import _ from 'lodash';
// Sara: Currently this isn't working... needs more investigation
import InlineSVG from 'svg-inline-react';

import { sightWords } from './sightWordsConstants';
import ShuffleOption from './ShuffleOption.jsx';
// import SightWordsInteractionPanel from './SightWordsInteractionPanel.jsx';

const SHUFFLE = require('knuth-shuffle').knuthShuffle;

// SARA: TODO: Clean up this class... it's way too long and can probably be broken up so that
// it's not as confusing
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
      shouldShowGradeSelection: true,
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

  getWords(shouldShuffle) {
    return shouldShuffle === true ? this.getShuffledWords() : this.state.selectedGrade.words;
  }

  updateInteractionPanel(grade) {
    this.setState({
      shouldShowGradeSelection: false,
      selectedGrade: grade,
      started: false,
      shuffle: false,
      wordIndex: 0
    });
  }

  displayNextWord() {
    // Check to see if the end of the list has been reached
    if (this.state.wordIndex === this.state.words.length - 1) {
      this.renderRestart();
    } else {
      this.setState((prevState, props) => {
        return {wordIndex: prevState.wordIndex + 1};
      });
    }
  }

  toggleShuffle() {
    this.setState((prevState, props) => {
      // Send the updated toggle state to get the corresponding words
      const updatedWords = this.getWords(!prevState.shuffle);

      return {
        shuffle: !prevState.shuffle,
        words: updatedWords
      }
    });
  }

  updateStarted() {
    const updatedWords = this.getWords(this.state.shuffle);

    this.setState({
      started: true,
      words: updatedWords
    });
  }

  getShuffleClassNames() {
    return this.state.shuffle === true ? `shuffle-button enabled` : `shuffle-button`;
  }

  getWord() {
    return this.state.words[this.state.wordIndex];
  }

  // TODO: Sara: This needs to be changed, but for now it's just a way for me to restart.
  renderRestart() {
    const message = 'This is the end of the sight words list! Would you like to restart?';

    if (confirm(message) === true) {
      this.updateInteractionPanel(this.state.selectedGrade);
    }
  }

  renderStartMode() {
    return (
      <div className="start-screen">
        <div className="start-button" onClick={() => {this.updateStarted()}}>Start</div>
        <ShuffleOption getClassNames={this.getShuffleClassNames()}
          onSelectToggleOption={() => {this.toggleShuffle()}} />
      </div>
    );
  }

  renderWordMode() {
    return (
      <div className="grade-words">
        <div className="word-wrapper">
          <p className="word">{this.getWord()}</p>
        </div>
        <ShuffleOption getClassNames={this.getShuffleClassNames()}
          onSelectToggleOption={() => {this.toggleShuffle()}} />
        <div className="next-button" onClick={() => {this.displayNextWord()}}>Next</div>
      </div>
    );
  }

  renderInteractionPanel() {
    if (!_.isEmpty(this.state.selectedGrade)) {
      return this.state.started === true ? this.renderWordMode() : this.renderStartMode();
    }

    // Don't render anything if no grade is selected
    return false;
  }

  renderGradeSelection() {
    if (this.state.shouldShowGradeSelection === true) {
      return (
        <div className="grades-selection">{this.renderGradeSelectionOptions()}</div>
      );
    }

    return false;
  }

  renderGradeSelectionOptions() {
    let grades = [];

    // Render the available list of grades to select from
    _.forEach(sightWords, (grade, index) => {
      grades.push(
        <div key={index}
          className={this.getGradeClassNames(grade)}
          onClick={() => {this.updateInteractionPanel(grade)}}>
          {grade.name}
        </div>
      );
    });

    return grades;
  }

  handleSelectBackOption() {
    // If the current screen is the grades selection, navigate back to main page
    // Otherwise, if the interaction panel is being shown, show the grades selection
    if (this.state.shouldShowGradeSelection === true) {
      this.props.onSelectBackOption();
    } else {
      this.setState({
        shouldShowGradeSelection: true,
        selectedGrade: ''
      });
    }
  }

  render() {
    return (
      <div id="sight-words">
        <div className="header">
          <div className="back-button button" onClick={() => {this.handleSelectBackOption()}}>
              Back
          </div>
          <div className="header-title">SIGHT WORDS</div>
        </div>
        <div className="body">
          {this.renderGradeSelection()}
          {this.renderInteractionPanel()}
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

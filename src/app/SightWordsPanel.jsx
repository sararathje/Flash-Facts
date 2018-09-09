import React from 'react';
import ShuffleOption from './ShuffleOption.jsx';

const SHUFFLE = require('knuth-shuffle').knuthShuffle;

class SightWordsPanel extends React.Component {
  propTypes: {
    selectedGrade: React.PropTypes.string
  };

  static defaultProps: {
    selectedGrade: ''
  };

  constructor(props) {
    super(props);

    this.state = {
      started: false,
      shuffle: false,
      words: [],
      wordIndex: 0
    };
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

  displayNextWord() {
    // Check to see if the end of the list has been reached
    if (this.state.wordIndex === this.state.words.length - 1) {
      this.renderRestartMessage();
    } else {
      this.setState((prevState, props) => {
        return {wordIndex: prevState.wordIndex + 1};
      });
    }
  }

  displayPreviousWord() {
    if (this.state.wordIndex > 0) {
      this.setState((prevState, props) => {
        return {wordIndex: prevState.wordIndex - 1};
      });
    }
  }

  updateStarted() {
    const updatedWords = this.getWords(this.state.shuffle);

    this.setState({
      started: true,
      words: updatedWords
    });
  }

  resetSightWordsPanel() {
    this.setState({
      started: false,
      shuffle: false,
      wordIndex: 0
    });
  }

  getShuffleClassNames() {
    return this.state.shuffle === true ? `shuffle-button button enabled` : `shuffle-button button`;
  }

  getWords(shouldShuffle) {
    return shouldShuffle === true ? this.getShuffledWords() : this.props.selectedGrade.words;
  }

  getShuffledWords() {
    return SHUFFLE(this.props.selectedGrade.words.slice(0));
  }

  getWord() {
    return this.state.words[this.state.wordIndex];
  }

   // TODO: Sara: This needs to be changed, but for now it's just a way for me to restart.
  renderRestartMessage() {
    const message = 'This is the end of the sight words list! Would you like to restart?';

    if (confirm(message) === true) {
      this.resetSightWordsPanel();
    }
  }

  renderStartMode() {
    return (
      <div className="start-screen">
        <div className="start-button button" onClick={() => {this.updateStarted()}}>Start</div>
        <ShuffleOption getClassNames={this.getShuffleClassNames()}
          onSelectToggleOption={() => {this.toggleShuffle()}} />
      </div>
    );
  }

  renderWordMode() {
    return (
      <div className="grade-words">
        <div className="word-wrapper">{this.getWord()}</div>
        <ShuffleOption getClassNames={this.getShuffleClassNames()}
          onSelectToggleOption={() => {this.toggleShuffle()}} />
        <div className="previous-button button"
          onClick={() => {this.displayPreviousWord()}}>Previous</div>
        <div className="next-button button" onClick={() => {this.displayNextWord()}}>Next</div>
        <div className="restart-button button"
          onClick={() => {this.resetSightWordsPanel()}}>Restart</div>
      </div>
    );
  }

  render() {
    return this.state.started === true ? this.renderWordMode() : this.renderStartMode();
  }
}

export default SightWordsPanel;

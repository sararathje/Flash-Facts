import React from 'react';
import Option from './Option.jsx';
import MathFacts from './MathFacts.jsx';
import SightWords from './SightWords.jsx';

class FlashFacts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showOptions: true,
      mathFactsSelected: false,
      sightWordsSelected: false
    };

    this.handleClickMathFacts = this.handleClickMathFacts.bind(this);
    this.handleClickSightWords = this.handleClickSightWords.bind(this);
    this.handleSelectBack = this.handleSelectBack.bind(this);
  }

  handleClickSightWords() {
    this.setState((prevState, props) => {
      return {
        showOptions: false,
        sightWordsSelected: true
      };
    });
  }

  handleClickMathFacts() {
    this.setState((prevState, props) => {
      return {
        showOptions: false,
        mathFactsSelected: true
      };
    });
  }

  handleSelectBack() {
    this.setState((prevState, props) => {
      return {
        showOptions: true,
        mathFactsSelected: false,
        sightWordsSelected: false
      };
    });
  }

  renderFlashFacts() {
    return this.state.showOptions === true ? this.renderOptionList() : this.renderOption();
  }

  // Sara: Probably a WAY better way to do this, but this how it be right now.
  renderOption() {
    if (this.state.mathFactsSelected) {
      return (
        <MathFacts onSelectBackOption={this.handleSelectBack} />
      );
    } else if (this.state.sightWordsSelected) {
      return (
        <SightWords onSelectBackOption={this.handleSelectBack} />
      );
    }

    return false;
  }

  renderOptionList() {
    return (
      <div id="options">
        <Option type="Math Facts" onSelectOption={this.handleClickMathFacts}/>
        <Option type="Sight Words" onSelectOption={this.handleClickSightWords} />
      </div>
    );
  }

	render() {
    return (
      <div id="flash-facts">
        {this.renderFlashFacts()}
      </div>
    );
  }
}

export default FlashFacts;

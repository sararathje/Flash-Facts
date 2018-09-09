import React from 'react';
import _ from 'lodash';
// Sara: Currently this isn't working... needs more investigation
import InlineSVG from 'svg-inline-react';

import { sightWords } from './sightWordsConstants';
import SightWordsPanel from './SightWordsPanel.jsx'

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
      selectedGrade: ''
    };
  }

  getGradeClassNames(grade) {
    return this.state.selectedGrade.name === grade.name ? `grade selected` : `grade`;
  }

  updateSightWordsPanel(grade) {
    this.setState({
      shouldShowGradeSelection: false,
      selectedGrade: grade
    });
  }

  renderSightWordsPanel() {
    if (!_.isEmpty(this.state.selectedGrade)) {
      // return this.state.started === true ? this.renderWordMode() : this.renderStartMode();
      return (
        <SightWordsPanel selectedGrade={this.state.selectedGrade} />
      );
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
          onClick={() => {this.updateSightWordsPanel(grade)}}>
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
          {this.renderSightWordsPanel()}
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

import React from 'react';
import { shallow } from 'enzyme';
import SightWords from '../src/app/SightWords';
import sinon from 'sinon';

describe('SightWords', () => {
  let component;

    const selectAGrade = () => {
      component.find('.grades-selection').find('.grade').first().simulate('click');
    };

    const selectStart = () => component.find('.start-button').simulate('click');

  beforeEach(() => {
    component = shallow(<SightWords />);
  });

  it('should call the onSelectBackOption when the back button is clicked', () => {
    const onBackStub = sinon.stub();
    component = shallow(
      <SightWords onSelectBackOption={onBackStub}/>,
    );
    const onBackButton = component.find('.back-button');
    onBackButton.simulate('click');

    expect(onBackStub.callCount).toBe(1);
  });

  it('should render a list of grades', () => {
    component = shallow(<SightWords />);

    const gradeList = component.find('.grades-selection');

    expect(gradeList.exists()).toBe(true);
  });

  it('should go to a start screen when a grade is selected', () => {
    component = shallow(<SightWords />);

    selectAGrade();

    expect(component.find('.start-screen').exists()).toBe(true);
  });

  it('should remember shuffle state on start', () => {
    component = shallow(<SightWords />);
    selectAGrade();
    component.find('.shuffle-button').simulate('click');
    expect(component.find('.shuffle-button').hasClass('enabled')).toBe(true);
    selectStart();
    expect(component.find('.shuffle-button').hasClass('enabled')).toBe(true);
  });

  describe('when looking at words', () => {
    beforeEach(() => {
      component = shallow(<SightWords />);
      selectAGrade();
      selectStart();
    });

    it('should enable shuffling when shuffle is clicked', () => {
      expect(component.find('.shuffle-button').hasClass('enabled')).toBe(false);
      component.find('.shuffle-button').simulate('click');
      expect(component.find('.shuffle-button').hasClass('enabled')).toBe(true);
    });

    it('should display a new letter until there are no more available', () => {
      const nextButton = component.find('.next-button');
      const goToNextLetter = () => nextButton.simulate('click');

      let lastLetter, currentLetter;
      const updateCurrentLetter = () => currentLetter = component.find('.word').text();

      do {
        updateCurrentLetter();
        expect(currentLetter).not.toBe(lastLetter);
        lastLetter = currentLetter;
        goToNextLetter();
      } while (currentLetter !== '')
    });
  });
});

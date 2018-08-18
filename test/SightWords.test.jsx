import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import SightWords from '../src/app/SightWords';
import sinon from 'sinon';

const mockSightWords = {
        grade1: {
          name: 'dummy',
          words: ['sara', 'is', 'so', 'cool']
        },
        grade2: {
          name: 'dummy2',
          words: ['cooler', 'than', 'cole']
        }
      };

describe('SightWords', () => {
  it('should call the onSelectBackOption when the back button is clicked', () => {
    const onBackStub = sinon.stub();
    const component = shallow(
      <SightWords onSelectBackOption={onBackStub} wordList={mockSightWords} />,
    );
    const onBackButton = component.find('.back-button');
    onBackButton.simulate('click');

    expect(onBackStub.callCount).toBe(1);
  });

  it('should render a list of grades', () => {
    const component = shallow(
      <SightWords wordList={mockSightWords} />
    );

    const gradeList = component.find('grades-selection');

    expect(gradeList).toBeDefined();
  });
});



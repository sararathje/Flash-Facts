import React from 'react';
import { shallow } from 'enzyme';
import SightWords from '../src/app/SightWords';
import sinon from 'sinon';

describe('SightWords', () => {
  it('should call the onSelectBackOption when the back button is clicked', () => {
    const onBackStub = sinon.stub();
    const component = shallow(
      <SightWords onSelectBackOption={onBackStub} />,
    );
    const onBackButton = component.find('.back-button');
    onBackButton.simulate('click');

    expect(onBackStub.callCount).toBe(1);
  });

  it('should render words for the selected grade', () => {
    const component = shallow(<SightWords />);

    component.find('.grade').first().simulate('click');

    expect(component.find('.word').length).toBeGreaterThan(0);
  });
});



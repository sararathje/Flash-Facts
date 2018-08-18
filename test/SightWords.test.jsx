import React from 'react';
import { shallow} from 'enzyme';
import SightWords from '../src/app/SightWords';
import sinon from 'sinon';

test('Sightwords calls the onSelectBackOption when the back button is clicked', () => {
  const onBackStub = sinon.stub();
  const component = shallow(
    <SightWords onSelectBackOption={onBackStub} />,
  );
  const onBackButton = component.find('.back-button');
  onBackButton.simulate('click');

  expect(onBackStub.callCount).toBe(1);
});

import React from 'react';
import { shallow, mount } from 'enzyme';
import FlashFacts from '../src/app/FlashFacts';
import sinon from 'sinon';

describe('FlashFacts', () => {
  it('should show options by default', () => {
    const component = shallow(<FlashFacts />);

    expect(component.find('#options').exists()).toBe(true);
  });

  const options = [
    {
      name: 'Math Facts',
      component: 'MathFacts'
    }, {
      name: 'Sight Words',
      component: 'SightWords'
    }
  ]

  options.forEach((option) => {
    describe(`when ${option.name} is clicked`, () => {
      let component;

      beforeEach(() => {
        component = mount(<FlashFacts />);
        component.findWhere((node) => node.props().type === option.name).find('.option').simulate('click');
      });

      it('should stop displaying options', () => {
        expect(component.find('#options').exists()).toBe(false);
      });

      it(`should display the ${option.name}`, () => {
        expect(component.find(option.component).exists()).toBe(true);
      });

      // this test is kind of integrationy but its cool
      it(`should return to the options when options back button is clicked`, () => {
        component.find(option.component).find('.back-button').simulate('click');

        expect(component.find('#options').exists()).toBe(true);
      });
    });
  });
});



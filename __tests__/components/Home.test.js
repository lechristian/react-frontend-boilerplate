import React from 'react';
import { shallow } from 'enzyme';

import { HomeComponent as Home } from '../../src/components/Home';


function setup() {
  const props = {
    number: 1,
    onTick: jest.fn(),
    onIncreaseClick: jest.fn(),
    onDecreaseClick: jest.fn(),
  };

  const homeComponent = shallow(<Home {...props} />);

  return {
    props,
    homeComponent,
  };
}

test('Home should have a class "home"', () => {
  const { homeComponent } = setup();
  expect(homeComponent.is('.home')).toBe(true);
});

test('Home.onIncreaseClick should be called with 2', () => {
  const { props, homeComponent } = setup();
  const increaseBtn = homeComponent.find('.btn--increase');
  expect(increaseBtn).toBeTruthy();
  increaseBtn.simulate('click');
  expect(props.onIncreaseClick).toBeCalledWith(2);
});

test('Home.onDecreaseClick should be called with 2', () => {
  const { props, homeComponent } = setup();
  const decreaseBtn = homeComponent.find('.btn--decrease');
  expect(decreaseBtn).toBeTruthy();
  decreaseBtn.simulate('click');
  expect(props.onDecreaseClick).toBeCalledWith(2);
});


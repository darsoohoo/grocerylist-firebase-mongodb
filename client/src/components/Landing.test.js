import React from 'react';
import { mount } from 'enzyme';
import Landing from './Landing';

let landing = mount(<Landing />);

describe('Landing', () => {
  it('renders Landing without crashing', () => {
    mount(<Landing />);
  });

  it('renders a table component', () => {
    expect(landing.find('.table').exists()).toBe(true);
  });
});

describe('when rendering the form', () => {
  it('creates a Form component', () => {
    expect(landing.find('form').exists()).toBe(true);
  });

  it('renders a text input', () => {
    expect(landing.find('input').exists()).toBe(true);
  });
});

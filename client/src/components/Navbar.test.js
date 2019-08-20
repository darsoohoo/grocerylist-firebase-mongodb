import React from 'react';
import { mount } from 'enzyme';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('renders header without crashing', () => {
    mount(<Navbar />);
  });
});

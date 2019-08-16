import React from 'react';
import { mount } from 'enzyme';
import LandingFb from './LandingFb';


let landingFb = mount(<LandingFb  />);

const defaultProps = {
  p
}


describe('Landing', () => {
    
    it('renders Landing without crashing', () => {
        mount(<LandingFb />);
    });

    it('renders a table component', () => {
        expect(landingFb.find('.table').exists()).toBe(true);
    });
})

describe('when rendering the form', () => {
    it('creates a Form component', () => {
      expect(landingFb.find('form').exists()).toBe(true);
    });

    it('renders a text input', () => {
      expect(landingFb.find('input').exists()).toBe(true);
    });

  });




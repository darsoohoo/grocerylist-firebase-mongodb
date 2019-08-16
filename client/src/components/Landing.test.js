import React from 'react';
import { mount } from 'enzyme';
import Landing from './Landing';



const props = { landing: { text: 'test_landing' } }
let landing = mount(<Landing  />);

describe('Landing', () => {

  //  let landing = mount(<Landing {...props} />);
    
    it('renders Landing without crashing', () => {
        mount(<Landing />);
    });

    it('renders a table component', () => {
        expect(landing.find('.table').exists()).toBe(true);
    });
})

describe('when rendering the form', () => {
    it('creates a Form component', () => {
      expect(landing.find('Form').exists()).toBe(true);
    });

    it('renders a FormControl component', () => {
      expect(landing.find('FormControl').exists()).toBe(true);
    });

  });


describe('when adding a grocery item', () => {
    
    let testItem = 'burgers';
    beforeEach(() => {
       
        landing.find('FormControl').simulate('change', {
            target: { value: testItem }
        });
    });

    it('updates the text in state', () => {
        expect(landing.state().newItem).toEqual(testItem);
    });
})


import React from 'react';
import { mount } from 'enzyme';
import Navbar from './Navbar';



describe('Header', () => {
    it('renders header without crashing', () => {
        mount(<Navbar />);
    });
});
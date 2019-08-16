import React from 'react';
import { mount } from 'enzyme';
import Footer from './Footer';



describe('Footer', () => {
    it('renders footer without crashing', () => {
        mount(<Footer />);
    });
    
});
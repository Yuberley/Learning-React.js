import React from 'react';
import '@testing-library/jest-dom'
import FirstApp from "../FirstApp";
import { shallow } from 'enzyme';

describe('Test on file FirstApp', () => {

    // test('Should show "Hello Im Goku"', () => {

    //     const greet = 'Hello Im Goku';
        
    //     const { getByText } = render( <FirstApp greet = 'Hello Im Goku'/> );

    //     expect( getByText( greet ) ).toBeInTheDocument();

    // })

    test('should render the component <FirstApp /> successfully', () => {

        const greet = 'Hello Im Goku';
        const wrapper = shallow(<FirstApp greet = { greet } />);

        expect( wrapper ).toMatchSnapshot();

    })

    test('should render the subtitle send by props', () => {

        const greet = 'Hello Im Goku';
        const subtitle = 'Im subtitle here'

        const wrapper = shallow(<FirstApp greet = { greet } subtitle = { subtitle } />);

        const textParagraph = wrapper.find('p').text();

        expect( textParagraph ).toBe( subtitle );

    })

})
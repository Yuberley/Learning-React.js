import React from 'react';
import '@testing-library/jest-dom';
import CounterApp from '../CounterApp';
import { shallow } from 'enzyme';

describe('Test on file CounterApp', () => {

    let wrapper;

    beforeEach( () => {

        wrapper = shallow(<CounterApp value = {0} />);

    })

    test('should show the component successfully', () => {
        
        expect( wrapper ).toMatchSnapshot();

    })

    test('should show default value 100', () => {

        const wrapper = shallow(<CounterApp value = {100} />);
        const valueDefault = wrapper.find('h2').text().trim();

        expect( valueDefault ).toBe( '100' );

    })

    test('should increment counter +1', () => {
        
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe( '1' );

    })

    test('should decrement counter -1', () => {

        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe( '-1' );

    })

    test('should reset counter 0', () => {

        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe( '0' );

    })


})
import React from 'react';
import Display from './Display';

import {
    render,
    fireEvent,
    cleanup,
    waitForElement,
} from 'react-testing-library';

import renderer from 'react-test-renderer';

import 'jest-dom/extend-expect'

afterEach(cleanup)

describe('<Display />', () => {
    it('makes the snapshot', () => {
        expect(renderer.create(<Display />).toJSON()).toMatchSnapshot();
    });
    it('displays if gate is open/closed and if it is locked/unlocked', () => {

    });
    it("displays 'Closed' if the closed prop is true and 'Open' if otherwise", () => {

    });
    it("displays 'Locked' if the locked prop is true and 'Unlocked' if otherwise", () => {

    });
    it('uses the red-led class when locked or closed ', () => {

    });
    it('uses the use the green-led class when unlocked or open', () => {

    });

});
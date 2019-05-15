import React from 'react';
import Dashboard from './Dashboard';

import {
    render,
    fireEvent,
    cleanup,
    waitForElement,
} from 'react-testing-library';

import renderer from 'react-test-renderer';

import 'jest-dom/extend-expect'

afterEach(cleanup)

describe('<Dashboard />', () => {
    it('makes the snapshot', () => {
        expect(renderer.create(<Dashboard />).toJSON()).toMatchSnapshot();
    });
    it('defaults to unlocked and open', () => {
        const { getByText } = render(<Dashboard />);
        expect(getByText(/unlocked/i)).toBeInTheDocument();
        expect(getByText(/open/i)).toBeInTheDocument();
    });
    it('shows the controls and display', () => {

    });
});
import React from 'react';
import renderer from 'react-test-renderer';
import Controls from './Controls';

describe('<Controls />', () => {
    it('makes the snapshot', () => {
        expect(renderer.create(<Controls />).toJSON()).toMatchSnapshot();
    });
    it('provide buttons to toggle the closed and locked states', () => {

    });
    it("buttons' text changes to reflect the state the door will be in if clicked", () => {

    });
    it('the closed toggle button is disabled if the gate is closed', () => {

    });
    it('the locked toggle button is disabled if the gate is open', () => {

    });
});
import React from 'react';
import renderer from 'react-test-renderer';
import Controls from './Controls';

describe('<Controls />', () => {
    it('makes the snapshot', () => {
        expect(renderer.create(<Controls />).toJSON()).toMatchSnapshot();
    });
});
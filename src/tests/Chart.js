import React from 'react';
import Chart from '../components/Chart';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
      .create(<Chart></Chart>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
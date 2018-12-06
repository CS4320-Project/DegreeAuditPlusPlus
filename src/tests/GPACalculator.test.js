import React from 'react';
import GPACalculator from '../components/GPACalculator';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
      .create(<GPACalculator></GPACalculator>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

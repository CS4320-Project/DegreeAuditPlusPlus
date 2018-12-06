import React from 'react';
import StudentSearch from '../components/StudentSearch';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
      .create(<StudentSearch></StudentSearch>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

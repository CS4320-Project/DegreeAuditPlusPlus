import React from 'react';
import Main from '../components/Main';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
      .create(<Main></Main>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
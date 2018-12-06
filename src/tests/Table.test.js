import React from 'react';
import Table from '../components/Table';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
      .create(<Table></Table>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

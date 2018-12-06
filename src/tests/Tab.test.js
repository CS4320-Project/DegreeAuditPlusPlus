import React from 'react';
import Tab from '../components/Tab';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
      .create(<Tab></Tab>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

import React from 'react';
import UserInfo from '../components/UserInfo';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
      .create(<UserInfo></UserInfo>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

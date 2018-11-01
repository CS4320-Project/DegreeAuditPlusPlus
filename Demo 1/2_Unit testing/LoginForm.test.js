import React from 'react';
import LoginForm from '../components/LoginForm';
import renderer from 'react-test-renderer';



it('renders correctly', () => {
  const tree = renderer
    .create(<LoginForm></LoginForm>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = renderer
    .create(<LoginForm></LoginForm>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

import React from 'react';
import LoginForm from '../components/LoginForm';
import renderer from 'react-test-renderer';
import Header from '../components/Header';
import Main from '../components/Main';
import App from '../components/App';

it('renders correctly', () => {
  const tree = renderer
    .create(<LoginForm></LoginForm>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = renderer
    .create(<Header></Header>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = renderer
    .create(<App></App>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = renderer
    .create(<Main></Main>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});


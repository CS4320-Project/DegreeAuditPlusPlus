# Unit Testing
Our application uses [Jest](https://jestjs.io/en/) and [React Test Renderer](https://reactjs.org/docs/test-renderer.html) to run unit tests on our UI components.

Each component which doesn't have dependent children has Unit Tests to ensure the components can render properly by themselves.

## Unit Testable Components
* Header
* LoginForm
* StudentSearch
* Table
* UserInfo

To run the tests, navigate to the root project directory and first ensure all dependencies are installed by running

`npm i`

Once this has finished, run

`npm test`

to execute the tests.

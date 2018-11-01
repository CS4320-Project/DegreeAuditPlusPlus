# Integration Testing
Our application uses [Jest](https://jestjs.io/en/) and [React Test Renderer](https://reactjs.org/docs/test-renderer.html) to run integration tests on our UI components.

Each component which has dependent children has Integration Tests to ensure the components can render properly along with all of their connected components.

## Integration Testable Components
* App
* Home
* Main
* Tab 

To run the tests, navigate to the root project directory and first ensure all dependencies are installed by running

`npm i`

Once this has finished, run

`npm test`

to execute the tests.

import renderer from 'react-test-renderer';

import App from './App.js';

test('renders a snapshot', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

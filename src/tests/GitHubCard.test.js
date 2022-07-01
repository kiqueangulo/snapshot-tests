import renderer from 'react-test-renderer';

import GitHubCard from '../components/GitHubCard';

test('renders my card', () => {
    const tree = renderer.create(<GitHubCard />).toJSON();
    expect(tree).toMatchSnapshot();
});
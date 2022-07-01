import Card from "react-bootstrap/Card";

function GitHubCard() {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img style={{ height: '18rem'}} variant="top" src='https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/39811523_10216104584714572_3458017168036200448_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0debeb&_nc_ohc=JHwsCvPcGioAX_xxd5d&tn=5ClC7_3Dd0oRpZ0J&_nc_ht=scontent-atl3-2.xx&oh=00_AT_eR-zCUuVKTOJ3Gl2_SSj7Im159erLLFoiGKp9JGWlpw&oe=62E21F0F' />
            <Card.Body>
                <Card.Title>kiqueangulo</Card.Title>
                <Card.Text>
                    Living the life.
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Link href="https://github.com/kiqueangulo">GitHub</Card.Link>
            </Card.Body>
        </Card>
    );
}

export default GitHubCard;
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import illustrationHero from "./assets/illustration-hero.svg";
import iconMusic from "./assets/icon-music.svg";
import CardHeader from "react-bootstrap/esm/CardHeader";

function App() {
  return (
    <div className="wrapper">
      <Container>
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <Card.Img src={illustrationHero} />
              </CardHeader>
              <Card.Body>
                <Card.Title>Order Summary</Card.Title>
                <Card.Text>
                  You can now listen to millions of songs, audiobooks, and
                  podcasts on any device anywhere you like!
                </Card.Text>
                <div className="info">
                  <div>
                    <img src={iconMusic} alt="" />
                  </div>
                  <div>
                    <p className="m-0 card-title">Annual Plan</p>
                    <p className="m-0 card-text">$59.99/year</p>
                  </div>
                  <div>
                    <button className="change-btn">Change</button>
                  </div>
                </div>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import iconMusic from "./assets/icon-music.svg";
import CardHeader from "react-bootstrap/esm/CardHeader";
import illustrationHero from "./assets/illustration-hero.svg";

function App() {
  return (
    <main>
      <div className="wrapper">
        <Container>
          <Row>
            <Col md={7} lg={5} xl={4} className="mx-auto col-12">
              <Card>
                <CardHeader>
                  <Card.Img
                    src={illustrationHero}
                    className="img-fluid"
                    alt="illustration hero"
                  />
                </CardHeader>
                <Card.Body className="px-5 py-4">
                  <Card.Title className="m-0 pt-2">Order Summary</Card.Title>
                  <Card.Text className="m-0 pb-4 pt-3 px-3">
                    You can now listen to millions of songs, audiobooks, and
                    podcasts on any device anywhere you like!
                  </Card.Text>
                  <div className="info my-1 p-3">
                    <img
                      src={iconMusic}
                      className="img-fluid"
                      alt="icon music"
                    />
                    <div>
                      <p className="m-0 card-title">Annual Plan</p>
                      <p className="m-0 card-text">$59.99/year</p>
                    </div>
                    <div>
                      <button className="change-btn">Change</button>
                    </div>
                  </div>
                  <Row className="pt-4">
                    <Col sm={12} className="mb-3 text-center">
                      <Button className="payment-btn w-100 p-3">
                        Proceed to Payment
                      </Button>
                    </Col>
                    <Col sm={12} className="text-center">
                      <Button className="cancel-btn">Cancel Order</Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
}

export default App;

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./aboutus.css";

export default function About() {
  return (
    <Container>
      <Row>
        <Col>
          <p className="about-us-text">
            <b>Avenir </b>
            was born out of the idea that a bespoke home should be simple,
            custom curated and stable. The epitome of modern luxury is to be
            able to make our homes a natural habitat and live a life, humans are
            designed to live. Avenir orchestrates the technology in all aspects
            of your home to deliver an exciting and effortless
            living experience.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

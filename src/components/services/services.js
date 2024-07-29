import { Image, Row, Col, Container } from "react-bootstrap";

import servicesBackgroundImg from "../../assets/images/ServicesBackground.png";
import ServiceIcon from "./serviceicon";
import SERVICES_ICON_DATA from "./serviceicondata";

export default function Services() {
  return (
    <section id="services">
      <Container className="p-0">
        <Row className="p-0">
          <h2>Avenir,</h2>
          <h4>Smart Home Automation</h4>
          <p>
            Avenir can control various devices in some of the most exclusive
            homes in the world.
          </p>
        </Row>
        <Row className="services-img-icon-row">
          <Image src={servicesBackgroundImg} fluid />
          <Container className="services-icon-container">
            <Row xs={3} md={5}>
              {SERVICES_ICON_DATA.map((colData, i) => (
                <Col key={colData.title} className="service-icon-col">
                  <ServiceIcon
                    title={colData.title}
                    color={colData.color}
                    path={colData.path}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </Row>
      </Container>
    </section>
  );
}

import { Image, Row, Col, Container } from "react-bootstrap";

import servicesBackgroundImg from "../../assets/images/ServicesBackground.png";
import ServiceIcon from "./serviceicon";
import SERVICES_ICON_DATA from "./serviceicondata";

export default function Services() {
  return (
    <section id="services" className="block services-section">
      <Image src={servicesBackgroundImg} fluid />
      <div className="services-content">
        <h1>Avenir,</h1>
        <h3>Smart Home Automation</h3>
        <p className="services-description">
          Avenir can control various devices in some of the most exclusive homes
          in the world.
        </p>
        <Container>
          <Row className="services-icon-row" sm={5}>
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
      </div>
    </section>
  );
}

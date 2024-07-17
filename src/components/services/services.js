import { Image, Row, Col, Container } from "react-bootstrap";

import servicesBackgroundImg from "../../assets/images/ServicesBackground.png";
import BulbIcon from "./icons/bulbIcon";
import KeypadIcon from "./icons/keypadIcon";
import FanIcon from "./icons/fanIcon";
import AcIcon from "./icons/acIcon";
import TvIcon from "./icons/tvIcon";
import StpIcon from "./icons/stpIcon";
import ProjectorIcon from "./icons/projectorIcon";
import CurtainIcon from "./icons/curtainIcon";
import VisitorIcon from "./icons/visitorIcon";
import GateIcon from "./icons/gateIcon";
import CctvIcon from "./icons/cctvIcon";
import MusicIcon from "./icons/musicIcon";
import SecurityIcon from "./icons/securityIcon";
import HometheaterIcon from "./icons/hometheaterIcon";
import NetworkingIcon from "./icons/networkingIcon";

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
          <Row className="services-icon-row">
            <Col>
              <BulbIcon color="grey" />
            </Col>
            <Col>
              <KeypadIcon color="grey" />
            </Col>
            <Col>
              <FanIcon color="grey" />
            </Col>
            <Col>
              <AcIcon color="grey" />
            </Col>
            <Col>
              <TvIcon color="grey" />
            </Col>
          </Row>
          <Row className="services-icon-row">
            <Col>
              <StpIcon color="grey" />
            </Col>
            <Col>
              <ProjectorIcon color="grey" />
            </Col>
            <Col>
              <CurtainIcon color="grey" />
            </Col>
            <Col>
              <VisitorIcon color="grey" />
            </Col>
            <Col>
              <GateIcon color="grey" />
            </Col>
          </Row>
          <Row className="services-icon-row">
            <Col>
              <CctvIcon color="grey" />
            </Col>
            <Col>
              <MusicIcon color="grey" />
            </Col>
            <Col>
              <SecurityIcon color="grey" />
            </Col>
            <Col>
              <HometheaterIcon color="grey" />
            </Col>
            <Col>
              <NetworkingIcon color="grey" />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

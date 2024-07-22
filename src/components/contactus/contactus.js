import { Col, Container, Row } from "react-bootstrap";

import EmailIcon from "./icons/emailIcon";
import FbIcon from "./icons/fbIcon";
import InstaIcon from "./icons/instaIcon";
import LinkedinIcon from "./icons/linkedinIcon";
import PhoneIcon from "./icons/phoneIcon";
import XIcon from "./icons/xIcon";
import ContactusForm from "./contactusForm";

const ContactUs = () => {
  return (
    <section id="contactus" className="contactus-section">
      <Container fluid>
        <Row>
          <Col>
            <h3>Reach us on</h3>
            <PhoneIcon />
            <p>+91 123 456 7890</p>
            <br />
            <EmailIcon />
            <p>avenir@gmail.com</p>
            <br />
            <br />
            <FbIcon />
            <LinkedinIcon />
            <InstaIcon />
            <XIcon />
          </Col>
          <Col>
            <ContactusForm />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUs;

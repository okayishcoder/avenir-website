import { Col, Container, Row } from "react-bootstrap";

import EmailIcon from "./icons/emailIcon";
import FbIcon from "./icons/fbIcon";
import InstaIcon from "./icons/instaIcon";
import LinkedinIcon from "./icons/linkedinIcon";
import PhoneIcon from "./icons/phoneIcon";
import XIcon from "./icons/xIcon";
import ContactusForm from "./contactusForm";
import AddressIcon from "./icons/addressIcon";

const ContactUs = () => {
  return (
    <section id="contactus" className="contactus-section shaded-bg">
      <Container fluid>
        <Row>
          <Col>
            <h3>Reach us on</h3>
            <AddressIcon />
            <p>
              B-802, 803 Times Square Arcade II Near Avalon Hotel <br />
              Sindhubhavan Rd, Thaltej, Ahmedabad, Gujarat 380054
            </p>
            <br />
            <PhoneIcon />
            <p>+91 123 456 7890</p>
            <br />
            <EmailIcon />
            <p>avenir@gmail.com</p>
            <br />
            <br />
            <div className="contacus-social-icons">
              <FbIcon />
              <LinkedinIcon />
              <InstaIcon />
              <XIcon />
            </div>
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

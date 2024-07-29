import { Col, Container, Row, Stack } from "react-bootstrap";

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
    <section id="contactus" className="contactus-section">
      <Container>
        <Row>
          <Col md={6}>
            <h3 className="mb-4">Get in Touch</h3>
            <ContactusForm />
          </Col>
          <Col md={6}>
            <h3 className="mb-4 reachus-on-h3">Reach us on</h3>
            <Stack gap={3}>
              <div>
                <AddressIcon />
                <p>
                  B-802, 803 Times Square Arcade II Near Avalon Hotel <br />
                  Sindhubhavan Rd, Thaltej, Ahmedabad, Gujarat 380054
                </p>
              </div>
              <div>
                <PhoneIcon />
                <p>+91 123 456 7890</p>
              </div>
              <div>
                <EmailIcon />
                <p>avenir@gmail.com</p>
              </div>
              <div>
                <FbIcon />
                <LinkedinIcon />
                <InstaIcon />
                <XIcon />
              </div>
            </Stack>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUs;

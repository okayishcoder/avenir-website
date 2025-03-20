import { Col, Container, Row, Stack } from 'react-bootstrap';

import EmailIcon from './icons/emailIcon';
import InstaIcon from './icons/instaIcon';
import LinkedinIcon from './icons/linkedinIcon';
import PhoneIcon from './icons/phoneIcon';
import ContactusForm from './contactusForm';
import AddressIcon from './icons/addressIcon';

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
                <p>+91 786 380 4810</p>
              </div>
              <div>
                <EmailIcon />
                <p>info@theavenir.in</p>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/company/avenir-india/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedinIcon />
                </a>
                <a
                  href="https://www.instagram.com/avenir_luxury_home_technology/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstaIcon />
                </a>
              </div>
            </Stack>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUs;

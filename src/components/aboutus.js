import Container from "react-bootstrap/Container";

export default function Aboutus() {
  return (
    <section id="aboutus" className="block">
      <Container fluid="md">
        <div className="title-holder">
          <h2>About us</h2>
          <div className="subtitle">learn about us</div>
        </div>
        <p className="about-us-text">
          <b>Avenir </b>
          was born out of the idea that a bespoke home should be simple, custom
          curated and stable. The epitome of modern luxury is to be able to make
          our homes a natural habitat and live a life, humans are designed to
          live. Avenir orchestrates the technology in all aspects of your home
          to deliver an exciting and effortless living experience.
        </p>
      </Container>
    </section>
  );
}

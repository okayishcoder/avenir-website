import { ReactTyped } from "react-typed";
import homeVideo from "../assets/videos/Avenir Video.mp4";
import { Container } from "react-bootstrap";

export default function Home() {
  const featuresList = [
    "Privacy",
    "Innovation",
    "Beauty",
    "Peace",
    "Comfort",
    "Flexibility",
    "Simplicity",
    "Security",
    "Delight",
    "Wellness",
    "Intelligence",
    "Magic",
  ];
  return (
    <section id="home" className="home-section shaded-bg">
      <Container className="home-container">
        <video src={homeVideo} autoPlay={true} muted={true} loop={true}></video>
        <div className="video-description">
          <div>
            <div>Imagine More</div>
          </div>
          <div className="animated-text">
            <p>
              <ReactTyped
                strings={featuresList}
                typeSpeed={100}
                loop
                backSpeed={20}
                cursorChar="|"
                showCursor={true}
              />
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

import { ReactTyped } from "react-typed";
import homeVideo from "../assets/videos/Avenir Video.mp4";

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
    <section id="home" className="home-block">
      <video src={homeVideo} autoPlay={true} muted={true} loop={true}></video>
      <div className="video-description">
        <div className="static-text">
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
    </section>
  );
}

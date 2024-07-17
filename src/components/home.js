import homeVideo from "../assets/videos/Avenir Video.mp4";

export default function Home() {
  const featuresList = [
    "Privacy",
    // "Innovation",
    // "Beauty",
    // "Peace",
    // "Comfort",
    // "Flexibility",
    // "Simplicity",
    // "Security",
    // "Delight",
    // "Wellness",
    // "Intelligence",
    // "Magic",
  ];
  return (
    <section id="home" className="home-block">
      <video src={homeVideo} autoPlay={true} muted={true} loop={true}></video>
      <div className="video-description">
        <div className="static-text">
          <div>Imagine More</div>
        </div>
        <div className="animated-text">
          {featuresList.map((feature) => {
            return (
              <li key={feature}>
                <p>{feature}</p>
              </li>
            );
          })}
        </div>
      </div>
    </section>
  );
}

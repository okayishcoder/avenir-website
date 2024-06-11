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
      <video src={homeVideo} autoplay="true" muted="true" loop="true"></video>
      <div className="video-description">
        <div class="static-text">
          <div>Imagine More</div>
        </div>
        <div className="animated-text">
          {featuresList.map((feature) => {
            return (
              <li>
                <p>{feature}</p>
              </li>
            );
          })}
        </div>
      </div>
    </section>
  );
}

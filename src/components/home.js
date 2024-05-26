import homeVideo from "../assets/videos/Avenir Video.mp4";

export default function Home() {
  return (
    <section id="home" className="home-block">
      <video src={homeVideo} autoplay="true" muted="true" loop="true"></video>
    </section>
  );
}

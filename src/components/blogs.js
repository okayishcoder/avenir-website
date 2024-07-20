import { Card, Button } from "react-bootstrap";

import Slider from "react-slick";

import PychologicalImg from "../assets/images/blogsImages/Psychological.jpg";
import Covid19Img from "../assets/images/blogsImages/Covid-19.jpg";
import IndustryImg from "../assets/images/blogsImages/Industry.jpg";
import LutronKeypadImg from "../assets/images/blogsImages/Lutron Keypad.jpg";
import OfficeLightingImg from "../assets/images/blogsImages/officelighting.jpg";
import IndiaHomeImg from "../assets/images/blogsImages/India home.jpg";
import VoiceAssistantImg from "../assets/images/blogsImages/voice-assistant.jpg";
import LockdownImg from "../assets/images/blogsImages/lockdown.jpg";
import AiImg from "../assets/images/blogsImages/ai.jpg";
import FunctionalityImg from "../assets/images/blogsImages/functionality.jpg";
import UtilityImg from "../assets/images/blogsImages/utility.jpg";
import BestHomeImg from "../assets/images/blogsImages/best home.jpg";
import IntegratorImg from "../assets/images/blogsImages/integrator.png";
import WhyImg from "../assets/images/blogsImages/Why.jpg";

const BLOGS_DATA = [
  {
    imgPath: PychologicalImg,
    title: "Psychological & Physiological Effects of Light on Human Body",
    description:
      "Can you imagine your life without Natural light and the peace it gives to your soul? Obviously, the answer is NO. Natural Light is one...",
  },
  {
    imgPath: Covid19Img,
    title: "Role of Technology post COVID-19",
    description:
      "‘It is not the strongest of the species that survives, nor the most intelligent one, but the one most responsive to change.’ As the humankind...",
  },
  {
    imgPath: IndustryImg,
    title: "Home Automation: Rapidly Growing Industry",
    description:
      "It is pretty hard to ignore the fact that smart technology has become an essential part of our lives. The world of home automation has...",
  },
  {
    imgPath: LutronKeypadImg,
    title: "Home Automation: Personalization is the Key!",
    description:
      "As Quoted by Cecelia Ahern - 'Home isn’t a place, it’s a feeling' and how can one feel great when coming home doesn’t tend to be...",
  },
  {
    imgPath: OfficeLightingImg,
    title: "Human Centric Lighting at Workplaces",
    description:
      "‘You never change things by fighting the existing reality. To change something, build a new model that makes the existing model obsolete.’- Buckminster Fuller With...",
  },
  {
    imgPath: IndiaHomeImg,
    title: "Home Automation in India",
    description:
      "'There is nothing more important than a good, safe, secure home.' – Rosalynn Carter The smart home market comprises of networked devices and related services...",
  },
  {
    imgPath: VoiceAssistantImg,
    title: "The evolving role of Virtual Assistant in Home Automation",
    description:
      "'No one is more cherished in this world than someone who lightens the burden of others.' – Joseph Addison Truly said and nothing could be...",
  },
  {
    imgPath: LockdownImg,
    title: "A Productive Lockdown",
    description:
      "'When fishermen don’t go to sea, they repair their nets.' – Nabil Sabio Azadi. Life as we knew changed on midnight of 24th March when...",
  },
  {
    imgPath: AiImg,
    title:
      "How Artificial Intelligence, Machine Learning & Home Automation is different but complimentary?",
    description:
      "Artificial Intelligence, Machine Learning and Automation are very popular terms nowadays but are still confusing and often interchanged. Artificial Intelligence...",
  },
  {
    imgPath: FunctionalityImg,
    title:
      "Home Automation – Aesthetics & functionality from a Technician’s viewpoint!",
    description:
      "Lit the lamp of cleanliness to spread the light of godliness Jesus At Avenir, we are continuously working on our Home Automation systems to make...",
  },
  {
    imgPath: UtilityImg,
    title: "What does Home Automation define? Aesthetics or Utility?",
    description:
      "Avenir talks about how Home Automation can not only help your house to have aesthetic value & Utility by glorifying the architectural & Designer’s work...",
  },
  {
    imgPath: BestHomeImg,
    title: "Choosing the Best Home Automation Integrator",
    description:
      "Hello Everyone, now that you’re aware of the ‘Who’ & ‘Why’ in regards to the Integrator. Let’s discuss ‘How’ today. Helping you to decode the...",
  },
  {
    imgPath: IntegratorImg,
    title: "Who are Automation Integrators?",
    description:
      "The Automation Industry which is expanding rapidly is divided into 3 major segments. All of which are equally important for you to understand so as...",
  },
  {
    imgPath: WhyImg,
    title: "Why integrator matters?",
    description:
      "Home Automation isn’t a destination but a process! This means it augments the lifestyle that you live right now with much more comfort, convenience, style...",
  },
];

const Blogs = () => {
  var settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
  };

  return (
    <section id="blogs" className="blogs-section">
      <Slider {...settings}>
        {BLOGS_DATA.map((blog, i) => {
          return (
            <Card key={i} className="blog-card">
              <Card.Img variant="top" src={blog.imgPath} />
              <Card.Body>
                <Card.Title>{blog.title}</Card.Title>
                <Card.Text>{blog.description}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary">Primary</Button>{" "}
              </Card.Footer>
            </Card>
          );
        })}
      </Slider>
    </section>
  );
};

export default Blogs;

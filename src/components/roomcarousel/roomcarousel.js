import { useState } from "react";

import Carousel from "react-bootstrap/Carousel";

import RoomCarouselImage from "./roomcarouselimage";

import { imagesData } from "./roomcarouseldata";
import { Container, Form } from "react-bootstrap";

export default function RoomCarousel() {
  const [hallPath, setHallPath] = useState(imagesData[0].rooms[0].src);
  const [diningPath, setDiningPath] = useState(imagesData[1].rooms[0].src);
  const [bathPath, setBathPath] = useState(imagesData[2].rooms[0].src);
  const [bedroomPath, setBedroomPath] = useState(imagesData[3].rooms[0].src);

  const changeImage = (roomType, newImagePath) => {
    if (roomType === "hall") setHallPath(newImagePath);
    else if (roomType === "dining") setDiningPath(newImagePath);
    else if (roomType === "bath") setBathPath(newImagePath);
    else return setBedroomPath(newImagePath);
  };

  const getPath = (roomType) => {
    if (roomType === "hall") return hallPath;
    if (roomType === "dining") return diningPath;
    if (roomType === "bath") return bathPath;
    return bedroomPath;
  };

  return (
    <section id="roomcarousel" className="block shaded-bg">
      <Carousel interval={null} className="room-carousel">
        {imagesData.map((image, i) => {
          return (
            <Carousel.Item key={image.id}>
              <RoomCarouselImage path={getPath(image.id)} />
              <Carousel.Caption>
                <Container fluid={true}>
                  <div key={`inline-radio`} className="mb-3">
                    {image.rooms.map((room, j) => {
                      return (
                        <Form.Check
                          key={j}
                          inline
                          label={room.title}
                          name={`room-${i}`}
                          type="radio"
                          id={`inline-radio-${room.title}`}
                          onChange={() => changeImage(image.id, room.src)}
                          defaultChecked={j === 0 && true}
                        />
                      );
                    })}
                  </div>
                </Container>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
}

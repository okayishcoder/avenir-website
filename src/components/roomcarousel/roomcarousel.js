import { useState } from "react";

import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

import RoomCarouselImage from "./roomcarouselimage";

import { imagesData } from "./roomcarouseldata";
import { Col, Container, Row } from "react-bootstrap";

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
    <section id="roomcarousel" data-bs-theme="dark" className="block">
      <Carousel interval={2000}>
        {imagesData.map((image) => {
          return (
            <Carousel.Item key={image.id}>
              <RoomCarouselImage path={getPath(image.id)} />
              <Carousel.Caption>
                <Container fluid={true}>
                  <Row>
                    {image.rooms.map((room) => {
                      return (
                        <Col key={room.title}>
                          <Button
                            variant="secondary"
                            id={image.id}
                            onClick={() => {
                              changeImage(image.id, room.src);
                            }}
                          >
                            {room.title}
                          </Button>
                        </Col>
                      );
                    })}
                  </Row>
                </Container>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
}

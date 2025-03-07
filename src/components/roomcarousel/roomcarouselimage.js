import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

export default function RoomCarouselImage(props) {
  return (
    <Container>
      <Image src={props.path} fluid />
    </Container>
  );
}

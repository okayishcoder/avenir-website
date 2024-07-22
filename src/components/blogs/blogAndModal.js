import { useState } from "react";

import { Card, Button, Modal, Image } from "react-bootstrap";

const BlogAndModal = (props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Card className="blog-card">
        <Card.Img variant="top" src={props.imgPath} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.shortDescription}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button
            variant="primary"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Primary
          </Button>{" "}
        </Card.Footer>
      </Card>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        dialogClassName="modal-90w text-ca"
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={props.imgPath} fluid />
          <p className="text-sa display-linebreak">{props.fullDescription}</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BlogAndModal;

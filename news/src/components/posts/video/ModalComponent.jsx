import React, { useState } from "react";
import { Ratio, Modal, Button } from "react-bootstrap";

export default function ModalComponent() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div />
      <Button style={
        {
          background: "#c4170c"
        }
      } onClick={handleShow}

        data-testid="modal-button"
      >
        Assista o vídeo!
      </Button>

      <Modal show={show} onHide={handleClose} data-testid="modal">

        <Modal.Header closeButton>
          <Modal.Title>Notícias do minuto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Ratio aspectRatio="16x9">
            <iframe
              width="204"
              height="146"
              src="https://www.youtube.com/embed/I0WFwj8Db5I"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Ratio>
        </Modal.Body>
      </Modal>
    </>
  );
}

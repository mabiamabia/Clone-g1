import React, { Component } from "react";
import { Card, Col, Row, ListGroup } from "react-bootstrap";
import ModalComponent from "./ModalComponent";

export default class VideoComponent extends Component {
  render() {
    return (
      <div>
        {/* Card de vídeo principal */}
        <Row>
          <Col
            style={{
              padding: "1%",
            }}
            sm={8}
          >
            <Col>
              <Card.Img src="https://picsum.photos/624/185" alt="Card image" />
            </Col>
            <Col>
              <Card
                style={{ textAlign: "center", backgroundColor: "#C4170C" }}
                className="bg-light text-dark"
              >
                <Card.Title
                  style={{ backgroundColor: "#C4170C", color: "#fff" }}
                  className="h1 font-weight-bold "
                >
                  Notícias do último minuto!
                </Card.Title>
                <Card.Text>
                  <ModalComponent />
                </Card.Text>
              </Card>
            </Col>
          </Col>

          {/* Noticia do canto */}
          <Col
            style={{
              padding: "1%",
            }}
            sm={4}
          >
            <Card
              style={{ textAlign: "center" }}
              className="bg-dark text-white"
            >
              <Card.Img src="https://picsum.photos/304/246" alt="Card image" />
              <ListGroup variant="flush">
                <ListGroup.Item
                  style={{ color: "#C4170C", fontWeight: "bolder" }}
                >
                  Novos rumos da política
                  <p style={{ color: "#000" }}>
                    Veja a cobertura oficial da eleição 2022
                  </p>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

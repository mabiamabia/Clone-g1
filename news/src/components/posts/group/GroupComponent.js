import React, { Component } from "react";
import { Card, Col, Row, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class GroupComponent extends Component {
  render() {
    return (
      <div>
        {/* Post de notícias educação */}
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
                style={{ textAlign: "center" }}
                className="bg-light text-dark"
              >
                <Card.Title
                  style={{ backgroundColor: "#C4170C", color: "#fff" }}
                  className="h1 font-weight-bold "
                >
                  Educação{" "}
                </Card.Title>
                <Card.Text>
                  Sobre política, economia, emprego, educação, saúde.
                  <Link to="article">Leia tudo</Link>
                </Card.Text>
              </Card>
            </Col>
          </Col>

          {/* noticia do canto (card com imagem acima e texto embaixo)*/}
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
                  Bahia
                </ListGroup.Item>
                <ListGroup.Item>
                  Veja a cobertura oficial do carnaval
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

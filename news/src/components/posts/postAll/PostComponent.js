import React, { Component } from "react";
import { Card, Col, Row, Carousel, ListGroup } from "react-bootstrap";
import "./PostComponent.css";

import GroupComponent from "../group/GroupComponent";

export default class PostComponent extends Component {
  render() {
    return (
      <div>
        {/* Post com noticias em lista */}
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
                  className="h1 font-weight-bold"
                >
                  Roraima{" "}
                </Card.Title>
                <Card.Text>
                  Sobre política, economia, emprego, educação, saúde.
                </Card.Text>
              </Card>
            </Col>
          </Col>

          {/* Agrupamento de noticias */}
          <Col
            style={{
              padding: "1%",
            }}
            sm={4}
          >
            <Card>
              <ListGroup>
                <ListGroup.Item style={{ color: "#000", fontWeight: "bolder" }}>
                  MAIS LIDAS
                </ListGroup.Item>
                <ListGroup as="ol" numbered>
                  <ListGroup.Item as="li" action href="#link1">
                    <a
                      target="_blank"
                      href="https://g1.globo.com/"
                      style={{
                        textDecoration: "none",
                        color: "#C4170C",
                        fontWeight: "bold",
                      }}
                      rel="noreferrer"
                    >
                      Altera o Cronograma de Eventos do Vestibular Especial
                    </a>
                  </ListGroup.Item>

                  <ListGroup.Item as="li" action href="#link2">
                    <a
                      target="_blank"
                      href="https://g1.globo.com/"
                      style={{
                        textDecoration: "none",
                        color: "#C4170C",
                        fontWeight: "bold",
                      }}
                      rel="noreferrer"
                    >
                      Universidades e institutos federais promovem ato contra
                      corte
                    </a>
                  </ListGroup.Item>

                  <ListGroup.Item as="li" action href="#link3">
                    <a
                      target="_blank"
                      href="https://g1.globo.com/"
                      style={{
                        textDecoration: "none",
                        color: "#C4170C",
                        fontWeight: "bold",
                      }}
                      rel="noreferrer"
                    >
                      Notícias, entrevistas e artigos de opinião
                    </a>
                  </ListGroup.Item>

                  <ListGroup.Item as="li" action href="#link4">
                    <a
                      target="_blank"
                      href="https://g1.globo.com/"
                      style={{
                        textDecoration: "none",
                        color: "#C4170C",
                        fontWeight: "bold",
                      }}
                      rel="noreferrer"
                    >
                      Notícias sobre a COVID-19:Acompanhe toda a cobertura
                    </a>
                  </ListGroup.Item>
                </ListGroup>
              </ListGroup>
            </Card>
          </Col>
        </Row>

        {/* Post de notícia sobre educação  */}
        <GroupComponent />

        {/* Post de noticias tipo carrosel */}
        <Row>
          <Col
            style={{
              padding: "1%",
            }}
            sm={8}
          >
            <Carousel>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src="https://picsum.photos/624/185?text=First slide&bg=373940"
                  alt="First slide"
                />
                <Carousel.Caption style={{ textShadow: "2px 2px 2px black" }}>
                  <h3>Economia</h3>
                  <p>
                    Notícias, entrevistas e artigos de opinião Notícias,
                    entrevistas e artigos de opinião
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  className="d-block w-100"
                  src="https://picsum.photos/624/185?text=Second slide&bg=282c34"
                  alt="Second slide"
                />
                <Carousel.Caption style={{ textShadow: "2px 2px 2px black" }}>
                  <h3>Educação</h3>
                  <p>
                    Últimas notícias do Brasil e do mundo, sobre política,
                    economia, emprego, educação, saúde, meio
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://picsum.photos/624/185?text=Third slide&bg=20232a"
                  alt="Third slide"
                />
                <Carousel.Caption style={{ textShadow: "2px 2px 2px black" }}>
                  <h3>Cultura</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          {/* Agrupamento de noticias */}
          <Col
            style={{
              padding: "1%",
            }}
            sm={4}
          >
            <Card className="bg-dark text-white">
              <Card.Img src="https://picsum.photos/304/246" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title
                  style={{
                    textShadow: "2px 2px 2px black",
                    backgroundColor: "#C4170C",
                  }}
                  className="h1 font-weight-bold"
                >
                  Emprego
                </Card.Title>

                <Card.Text style={{ textShadow: "2px 2px 2px black" }}>
                  Últimas notícias do Brasil e do mundo, sobre política,
                  economia, emprego, educação, saúde, meio ambiente, tecnologia,
                  ciência, cultura e carros.
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

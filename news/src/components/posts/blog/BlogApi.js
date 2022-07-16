/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";

export default function BlogApi() {
  const [page, setPage] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/feed/page/1")
      .then((res) => res.json())
      .then((resultado) => {
        setPage(resultado);
      });
  });

  return (
    <div>
      {page.map((page) => (
        <div key={page?.id}>
          <Container>
            <Row>
              {/* Noticia principal */}
              <Col
                style={{
                  padding: "1%",
                  textDecoration: "none",
                  border: "none",
                }}
                sm={8}
              >
                <Row>
                  <Col>
                    <Card.Img
                      width="304"
                      height="246"
                      src={
                        page.image
                          ? page.image
                          : "https://picsum.photos/304/246"
                      }
                      alt="Card image"
                    />
                  </Col>

                  <Col>
                    <a href={page.url ? page.url : "https://g1.globo.com/"}>
                      <Card
                        style={{ textAlign: "center" }}
                        className="bg-light text-dark"
                      >
                        <Card.Title
                          style={{
                            backgroundColor: "#C4170C",
                            color: "#fff",
                            textDecoration: "none"
                          }}
                      
                        >
                          {page?.title}
                        </Card.Title>
                        <Card.Text
                        style={{
                      
                          textDecoration: "none"
                        }}
                        >{page?.summary}</Card.Text>
                        Conteúdo: {page?.type}
                      </Card>
                    </a>
                  </Col>
                </Row>
              </Col>

              {/* noticia do canto (card com imagem acima e texto abaixo)*/}
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
                  <Card.Img
                    src="https://picsum.photos/304/246"
                    alt="Card image"
                  />
                  <ListGroup variant="flush">
                    <ListGroup.Item
                      style={{ color: "#C4170C", fontWeight: "bolder" }}
                    >
                      {page?.title}
                    </ListGroup.Item>
                    <ListGroup.Item>{page?.summary}</ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      ))}
    </div>
  );
}

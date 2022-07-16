/* eslint-disable no-undef */
import React, { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";

export default class MainPostComponent extends Component {
  render() {
    return (
      <div className="mt-3">
        {/* Duas noticias principais  */}
        <Row>
          {/* Primeira noticia */}
          <Col sm={6}>
            <Card.Body>
              <Card.Title className="mb-2 text-muted">
                Primeiras Projeções da politica
              </Card.Title>
              <Card.Text
                style={{
                  fontSize: "6vh",
                  color: "#C4170C",
                  fontWeight: "bolder",
                  paddingBottom: "30px",
                }}
              >
                Famosos na 26ª edição da Parada do Orgulho LGBT+; fotos
              </Card.Text>
              <Card.Subtitle>
                Ariadna Arantes, Salete Campari, Guilherme Boulos e Erica
                Malunguinho, entre outros, compareceram ao evento neste domingo,
                (19) na Avenida Pauista, região central da capital.
              </Card.Subtitle>
            </Card.Body>
          </Col>

          {/* Segunda Noticia */}
          <Col sm={6}>
            <Card className="bg-dark text-white">
              <Card.Img src="https://picsum.photos/464/426" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title
                  style={{
                    fontSize: "70px",
                    color: "#fff",
                    textShadow: "2px 2px 2px black",
                  }}
                  className="h1 font-weight-bold"
                >
                  Gasolina{" "}
                </Card.Title>
                <Card.Text
                  style={{
                    fontSize: "20px",
                    color: "#fff",
                    textShadow: "2px 2px 2px black",
                  }}
                >
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

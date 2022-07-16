import React, { Component } from "react";
import { Card, Col, Row, Container } from "react-bootstrap";

export default class AdvertisingComponent extends Component {
  render() {
    return (
      <Container fluid>
        {/* card com propaganda inicial */}
        <Row>
          <Col
            sm={12}
            style={{
              padding: "3%",
            }}
          >
            <Card className="bg-dark text-white">
              <Card.Img src="https://picsum.photos/731/180" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title
                  style={{
                    textAlign: "center",
                    padding: "2%",
                    margin: "5%",
                    fontSize: "1em",
                    color: "#fff",
                    fontFamily: "cursive",
                    borderRadius: "25px",
                    backgroundImage: "linear-gradient(blue, purple)",
                  }}
                >
                  Anúncio
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

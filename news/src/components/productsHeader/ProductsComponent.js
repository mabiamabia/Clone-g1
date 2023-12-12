import React, { Component } from "react";
import { Nav } from "react-bootstrap";

export default class ProductsComponent extends Component {
  
  render() {
    return (
      <div>
        <Nav
          expand="lg"
          className="font-weight-bold p-0 ml-5"
          onSelect={(selectedKey) => alert(`Você clicou em ${selectedKey}`)}
        >
          <Nav.Item>
            <Nav.Link
              style={{ Color: "#e81026", fontWeight: "bolder" }}
              eventKey="Globo.com"
            >
              globo.com
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              style={{ fontWeight: "bolder" }}
              className="link-danger"
              eventKey="g1"
            >
              g1
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              style={{ fontWeight: "bolder" }}
              className="link-info"
              eventKey="ge"
            >
              ge
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              style={{ fontWeight: "bolder" }}
              className="link-warning"
              eventKey="gshow"
            >
              gshow
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              style={{ fontWeight: "bolder" }}
              className="link-secondary"
              eventKey="Globoplay"
            >
              globoplay
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}

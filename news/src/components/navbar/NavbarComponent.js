import React, { Component } from "react";
import { Navbar, Nav, Form, Container, Button } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";

export default class NavbarComponent extends Component {
  render() {
    return (
      
      <div>
        <Navbar
          expand="lg"
          style={{ backgroundColor: "#C4170C", width: "100%" }}
        >
          <h1
            style={{
              color: "#fff",
              alignItems: "center",
              alignContent: "center",
              height: "8vh",
              width: "1500vh",
              fontSize: "3em",
              display: "flex",
              justifyContent: "center",
              textShadow: "2px 2px 2px black",
            }}
          >
            g1
          </h1>
          <Container fluid>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              ></Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Buscar"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline">
                  <FiSearch size={25} color="#fff" />
                </Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

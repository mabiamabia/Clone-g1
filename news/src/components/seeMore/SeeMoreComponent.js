import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class SeeMoreComponent extends Component {
  render() {
    return (
      <div
        style={{
          textAlign: "center",
        }}
      >
        <Button
          style={{
            background: "#c4170c",
            alignItems: "center",
            color: "#fff",
            padding: "10px",
            margin: "5px",
          }}
        >
          Veja mais
        </Button>
      </div>
    );
  }
}

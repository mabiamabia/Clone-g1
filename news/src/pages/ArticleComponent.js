import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ArticleComponent extends Component {
  render() {
    return (
      
      <div>
      <h1>Article</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="page">page</Link>
      </nav>
    </div>
    );
  }
}

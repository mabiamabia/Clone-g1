import React from "react";
import { Link } from "react-router-dom";

const PageComponent = () => {

  return (
    <span>
      <h1>Page</h1>
      <h2>Esse é a page</h2>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="page">Article</Link>|{" "}
      </nav>
    </span>
  );

}

export default PageComponent
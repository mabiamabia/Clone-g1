import React from "react";
import { Link } from "react-router-dom";

export default function ArticleComponent()  {

    return (
      
      <span>
      <h1>Article</h1>
      <h2>Esse é o artigo</h2>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="page">page</Link>
      </nav>
    </span>
    );
  
}

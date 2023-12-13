import ArticleComponent from "../pages/ArticleComponent";
import PageComponent from "../pages/PageComponent";
import { Route, Routes } from "react-router-dom";
import React from "react";
import { Home } from "../pages/Home";

export default function PrincipalRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/article" element={<ArticleComponent />} />
      <Route path="/page" element={<PageComponent />} />
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
}

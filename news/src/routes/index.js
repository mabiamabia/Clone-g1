import App from "../App";
import Pager from "../config";
import ArticleComponent from "../pages/ArticleComponent";
import PageComponent from "../pages/PageComponent";
import { Route, Routes } from "react-router-dom";
import React from "react";

export default function routes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/article" element={<ArticleComponent />} />
      <Route path="/page" element={<PageComponent />} />
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
}

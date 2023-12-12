/* eslint-disable jsx-a11y/alt-text */
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import NavbarComponent from "./components/navbar/NavbarComponent";
import HomeComponent from "./components/home/HomeComponent";
import FooterComponent from "./components/footer/FooterComponent";
import ProductsComponent from "./components/productsHeader/ProductsComponent";
import SeeMoreComponent from "./components/seeMore/SeeMoreComponent";
import ApiWeather from "./services/ApiWeather";
import MainPostComponent from "./components/posts/mainpost/MainPostComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pagination from "./components/pagination/Pagination";
import PageComponent from "./pages/PageComponent";
import  ArticleComponent  from "./pages/ArticleComponent";
import { Home } from "./pages/Home";

function App() {
  return (
  
     
    <>
      <BrowserRouter>
      <div>
      <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/article" element={<ArticleComponent />} />
          <Route path="/page" element={<PageComponent />} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>

        
      </div>
      </BrowserRouter>

    </>

  );
}
export default App;

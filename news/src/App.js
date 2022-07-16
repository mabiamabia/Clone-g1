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
import { BrowserRouter } from "react-router-dom";
import Pagination from "./components/pagination/Pagination";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container fluid>
          <ProductsComponent />
          <ApiWeather />
          <NavbarComponent />
          <Container>
            <MainPostComponent />
          </Container>
          <HomeComponent />
          <HomeComponent />
          <SeeMoreComponent />
          <Pagination />      
          <FooterComponent />
        </Container>
      </div>
    </BrowserRouter>
  );
}
export default App;

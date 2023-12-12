import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import HomeComponent from "../components/home/HomeComponent";
import FooterComponent from "../components/footer/FooterComponent";
import ProductsComponent from "../components/productsHeader/ProductsComponent";
import SeeMoreComponent from "../components/seeMore/SeeMoreComponent";
import ApiWeather from "../services/ApiWeather";
import MainPostComponent from "../components/posts/mainpost/MainPostComponent";
import Pagination from "../components/pagination/Pagination";


export function Home(){
    return(
    
    <div className="App">
    <Container fluid>
      <ProductsComponent />
      <ApiWeather />
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
  )
}
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import HomeComponent from "../components/home/HomeComponent";
import SeeMoreComponent from "../components/seeMore/SeeMoreComponent";
import MainPostComponent from "../components/posts/mainpost/MainPostComponent";
import Pagination from "../components/pagination/Pagination";


export function Home() {
  return (

    <div className="App">
      <Container fluid>
        <Container>
          <MainPostComponent />
        </Container>
        <HomeComponent />
        <HomeComponent />
        <SeeMoreComponent />
        <Pagination />
      </Container>
    </div>
  )
}
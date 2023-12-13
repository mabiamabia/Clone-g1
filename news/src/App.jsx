/* eslint-disable jsx-a11y/alt-text */
import "bootstrap/dist/css/bootstrap.min.css";
import FooterComponent from "./components/footer/FooterComponent";
import { BrowserRouter } from "react-router-dom";
import PrincipalRoutes from "./routes";
import HeaderComponent from "./pages/HeaderComponent";

function App() {
  return (


    <>
      <BrowserRouter>
        <div>
          <HeaderComponent />
          <PrincipalRoutes />
          <FooterComponent />
        </div>
      </BrowserRouter>

    </>

  );
}
export default App;

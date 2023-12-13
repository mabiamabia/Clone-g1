import ProductsComponent from "../components/productsHeader/ProductsComponent"
import ApiWeather from "../services/ApiWeather"
import NavbarComponent from "../components/navbar/NavbarComponent"

export default function HeaderComponent() {
    return (

        <div>
            <ProductsComponent />
            <ApiWeather />
            <NavbarComponent />
        </div>
    )
}
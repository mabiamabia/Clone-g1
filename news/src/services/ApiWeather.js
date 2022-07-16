/* eslint-disable jsx-a11y/alt-text */

import { Button, Container } from "react-bootstrap";
import { useState } from "react";

export default function ApiWeather() {
  const [city, setCity] = useState("");
  const [weatherForeCast, setWeatherForeCast] = useState(null);

  /* função para ler input*/
  const handleChange = (e) => {
    setCity(e.target.value);
  };
  /* função para fazer requisição na api*/
  const handleSearch = () => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=7ef27f9e2ef343b1b61135832221706&q=${city}&lang=pt`
    )
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => {
        setWeatherForeCast(data);
      });
  };

  return (
    <div className="ApiWeather">
      {/* api previsão do tempo */}
      <Container>
        <div>
          <div
            style={{
              color: "red",
              boxSizing: "30px",
              fontSize: "28px",
              textAlign: "center",
              fontWeight: "bolder",
            }}
            className="mt-2  mb-2 mx-0s link-dark bg-info"
          >
            <main>
              Previsão do tempo para:
              <input
                type={"text"}
                onChange={handleChange}
                className="col-2 mx-4 my-4"
                value={city}
              />
              <Button
                className="mt-2 mb-2"
                onClick={handleSearch}
                variant="outline-light"
              >
                pesquisar
              </Button>{" "}
              {/* Mostra dados da previsão do tempo */}
              {weatherForeCast ? (
                <div className=" lead">
                  <h3>
                    <img src={weatherForeCast.current.condition.icon} />
                    Hoje o dia está: {weatherForeCast.current.condition.text}
                  </h3>
                  <p>Temperatura: {weatherForeCast.current.temp_c}°C</p>
                </div>
              ) : null}
            </main>
          </div>
        </div>
      </Container>
      {/* fim previsão do tempo */}
    </div>
  );
}

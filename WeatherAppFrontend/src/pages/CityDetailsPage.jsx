import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./CityDetailsPage.css";

const CityDetailsPage = () => {
  const { cityName } = useParams();
  const navigate = useNavigate();

  const data = {
    city: cityName,
    temp: 31,
    condition: "Sunny",
    humidity: 60,
    wind: 14,
    icon: "https://openweathermap.org/img/wn/01d.png",
  };

  return (
    <div className="city-details-page">
      <button className="back-button" onClick={() => navigate("/")}>
        ← Back
      </button>
      <div className="weather-details-card">
        <div className="weather-details-top">
          <h1>{data.city}</h1>
          <img src={data.icon} alt={data.condition} height="60" />
        </div>
        <div className="weather-details-bottom">
          <div>
            <strong>Temperature:</strong> {data.temp}&deg;C
          </div>
          <div>
            <strong>Condition:</strong> {data.condition}
          </div>
          <div>
            <strong>Humidity:</strong> {data.humidity}%
          </div>
          <div>
            <strong>Wind:</strong> {data.wind} km/h
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityDetailsPage;

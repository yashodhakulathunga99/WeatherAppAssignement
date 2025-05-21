import React from "react";
import { useNavigate } from "react-router-dom";
import "./WeatherCard.css";
import axios from "axios";

const WeatherCard = ({ city, temp, condition, icon }) => {
  const navigate = useNavigate();

  return (
    <div className="weather-card" onClick={() => navigate(`/city/${city}`)}>
      <div className="weather-card-header">
        <span className="weather-card-title">{city}</span>
        <img src={icon} alt={condition} height="40" />
      </div>
      <div className="weather-card-body">
        <div className="temp">{temp}&deg;C</div>
        <div>{condition}</div>
      </div>
    </div>
  );
};

export default WeatherCard;

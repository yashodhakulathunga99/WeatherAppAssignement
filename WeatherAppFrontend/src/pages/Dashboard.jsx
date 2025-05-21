import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherCard from "../components/WeatherCard";
import { useAuth0 } from "@auth0/auth0-react";
import "./Dashboard.css";

const Dashboard = () => {
  const { logout } = useAuth0();

  const [search, setSearch] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/weather/all")
      .then((response) => {
        const updatedData = response.data.map((item) => ({
          city: item.cityName,
          temp: item.temp,
          condition: item.status,
          icon: getWeatherIcon(item.status),
        }));
        setWeatherData(updatedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setLoading(false);
      });
  }, []);

  const getWeatherIcon = (status) => {
    if (status === "Clear") return "https://openweathermap.org/img/wn/01d.png";
    if (status === "Clouds") return "https://openweathermap.org/img/wn/03d.png";
    if (status === "Rain") return "https://openweathermap.org/img/wn/09d.png";
    if (status === "Mist") return "https://openweathermap.org/img/wn/50d.png";
    return "https://openweathermap.org/img/wn/02d.png";
  };

  const filteredData = weatherData.filter((data) =>
    data.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <input
          type="text"
          placeholder="Search city..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => alert("Search clicked!")}>Search</button>

        <button
          onClick={() =>
            logout({
              logoutParams: {
                returnTo: window.location.origin,
              },
            })
          }
        >
          Logout
        </button>
      </div>

      {loading ? (
        <p>Loading weather data...</p>
      ) : (
        <div className="weather-cards-container">
          {filteredData.map((data, index) => (
            <WeatherCard key={index} {...data} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;

import React, { useState, useEffect } from "react";
import "./App.css"; // The CSS file for styling
import SearchForm from "./components/SearchForm";
import GrantLocation from "./components/GrantLocation";
import Loading from "./components/Loading";
import WeatherInfo from "./components/WeatherInfo";
import Error from "./components/Error";

const API_KEY = "09e1ad3038dafd7bc381e93027e778ed";

function App() {
  const [currentTab, setCurrentTab] = useState("userWeather");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    const savedCoordinates = sessionStorage.getItem("userCoordinates");
    if (savedCoordinates) {
      setCoordinates(JSON.parse(savedCoordinates));
    }
  }, []);

  useEffect(() => {
    if (coordinates) {
      fetchWeatherInfo(coordinates);
    }
  }, [coordinates]);

  const fetchWeatherInfo = async (coordinates) => {
    setLoading(true);
    try {
      const { lat, lon } = coordinates;
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      if (!data.sys) {
        throw data;
      }
      setWeatherData(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const fetchSearchWeatherInfo = async (city) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      if (!data.sys) {
        throw data;
      }
      setWeatherData(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleTabSwitch = (tab) => {
    setCurrentTab(tab);
    setError(null);
    setWeatherData(null);
    if (tab === "userWeather") {
      setCoordinates(JSON.parse(sessionStorage.getItem("userCoordinates")));
    }
  };

  const grantLocationAccess = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userCoordinates = {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        };
        sessionStorage.setItem(
          "userCoordinates",
          JSON.stringify(userCoordinates)
        );
        setCoordinates(userCoordinates);
      });
    }
  };

  return (
    <div className="wrapper">
      <h1>Weather App</h1>
      <div className="tabContainer">
        <p
          className={`tab ${currentTab === "userWeather" ? "currentTab" : ""}`}
          onClick={() => handleTabSwitch("userWeather")}
        >
          Your Weather
        </p>
        <p
          className={`tab ${
            currentTab === "searchWeather" ? "currentTab" : ""
          }`}
          onClick={() => handleTabSwitch("searchWeather")}
        >
          Search Weather
        </p>
      </div>

      <div className="container">
        {currentTab === "searchWeather" && (
          <SearchForm onSearch={fetchSearchWeatherInfo} />
        )}

        {loading && <Loading />}

        {error && (
          <Error
            message={error}
            onRetry={() => fetchWeatherInfo(coordinates)}
          />
        )}

        {!loading && !error && weatherData && (
          <WeatherInfo data={weatherData} />
        )}

        {!loading && !weatherData && !error && currentTab === "userWeather" && (
          <GrantLocation onGrant={grantLocationAccess} />
        )}
      </div>
    </div>
  );
}

export default App;

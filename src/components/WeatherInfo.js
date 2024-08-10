import React from "react";

function WeatherInfo({ data }) {
  const {
    name,
    sys: { country },
    weather,
    main: { temp, humidity },
    wind: { speed },
    clouds: { all: clouds },
  } = data;

  return (
    <div className="userInfoContainer subContainer active">
      <div className="name">
        <p>{name}</p>
        <img
          src={`https://flagcdn.com/144x108/${country.toLowerCase()}.png`}
          alt={country}
        />
      </div>

      <p>{weather[0].description}</p>
      <img
        src={`http://openweathermap.org/img/w/${weather[0].icon}.png`}
        alt={weather[0].description}
      />

      <p>{temp.toFixed(2)} °C</p>

      <div className="parameterContainer">
        <div className="parameter">
          <img src="Images/wind.png" alt="Wind" />
          <p>windspeed</p>
          <p className="parameterValue">{speed.toFixed(2)} m/s</p>
        </div>

        <div className="parameter">
          <img src="Images/humidity.png" alt="Humidity" />
          <p>humidity</p>
          <p className="parameterValue">{humidity.toFixed(2)} %</p>
        </div>

        <div className="parameter">
          <img src="Images/cloud.png" alt="Clouds" />
          <p>clouds</p>
          <p className="parameterValue">{clouds.toFixed(2)} %</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherInfo;

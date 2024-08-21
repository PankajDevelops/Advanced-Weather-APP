import React from "react";
import "../App.css"; // Assuming you'll move the related styles to a separate CSS file

function WeatherInfo({ data }) {
  const {
    name,
    sys: { country },
    weather,
    main: { temp, humidity },
    wind: { speed },
    clouds: { all: clouds },
  } = data;

  // Set a background image based on the weather description
  const getBackgroundImage = (description) => {
    switch (description) {
      case "clear sky":
        return "url('https://4kwallpapers.com/images/walls/thumbs_3t/4044.jpg')";

      case "few clouds":
        return "url('https://img.freepik.com/premium-photo/blue-sky-with-cloud-background_35380-1070.jpg')";

      case "scattered clouds":
        return "url('https://www.bedlamfarm.com/wp-content/uploads/2022/04/The-Chaotic-Sky-1-1.jpeg";

      case "broken clouds":
        return "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/625a747a-061b-477d-958f-a0d6cea9e4cb/dax9bd4-dd0da73d-5b6e-415c-b05e-19471f366e5a.jpg/v1/fill/w_1024,h_768,q_75,strp/broken_clouds_by_kevintheman_dax9bd4-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY4IiwicGF0aCI6IlwvZlwvNjI1YTc0N2EtMDYxYi00NzdkLTk1OGYtYTBkNmNlYTllNGNiXC9kYXg5YmQ0LWRkMGRhNzNkLTViNmUtNDE1Yy1iMDVlLTE5NDcxZjM2NmU1YS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.2HBtScMyydNDUe606gk2Jd8RHs6iM-76feSI7Dc3sLw')";

      case "overcast clouds":
        return "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/625a747a-061b-477d-958f-a0d6cea9e4cb/dax9bd4-dd0da73d-5b6e-415c-b05e-19471f366e5a.jpg/v1/fill/w_1024,h_768,q_75,strp/broken_clouds_by_kevintheman_dax9bd4-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY4IiwicGF0aCI6IlwvZlwvNjI1YTc0N2EtMDYxYi00NzdkLTk1OGYtYTBkNmNlYTllNGNiXC9kYXg5YmQ0LWRkMGRhNzNkLTViNmUtNDE1Yy1iMDVlLTE5NDcxZjM2NmU1YS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.2HBtScMyydNDUe606gk2Jd8RHs6iM-76feSI7Dc3sLw')";

      case "shower rain":
        return "url('https://iphonegr.elnorte.com/libre/online07/imagetransformer2/ImageTransformer.aspx?img=https://img.gruporeforma.com/imagenes/960x640/6/519/5518676.jpg&imagencompleta=1')";

      case "moderate rain":
        return "url('https://qph.cf2.quoracdn.net/main-qimg-62808bf5c553e18e5cc8b4a13ec9e4ad')";

      case "rain":
        return "url('https://wallpapers.com/images/featured/beautiful-rain-5ukdd5qwuu01y7gx.jpg')";

      case "thunderstorm":
        return "url('https://c4.wallpaperflare.com/wallpaper/214/983/665/rain-pictures-for-desktop-wallpaper-preview.jpg')";

      case "snow":
        return "https://wallpapers.com/images/hd/beautiful-winter-k1ehvkzri2l9ug7a.jpg')";

      case "mist":
        return "url('https://i.pinimg.com/736x/c1/b8/d0/c1b8d0bf43d9eb99b3934a4765b9d74f.jpg')";

      default:
        return "url('/Images/default-weather.jpg')";
    }
  };

  return (
    <div
      className="userInfoContainer subContainer active"
      style={{
        backgroundImage: getBackgroundImage(weather[0].description),
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
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

import React from "react";

const Tabs = ({ currentTab, switchTab }) => {
  return (
    <div className="tabContainer">
      <p
        className={`tab ${currentTab === "userWeather" ? "currentTab" : ""}`}
        onClick={() => switchTab("userWeather")}
      >
        Your Weather
      </p>
      <p
        className={`tab ${currentTab === "searchWeather" ? "currentTab" : ""}`}
        onClick={() => switchTab("searchWeather")}
      >
        Search Weather
      </p>
    </div>
  );
};

export default Tabs;

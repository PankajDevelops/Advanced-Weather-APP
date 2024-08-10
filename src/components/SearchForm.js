import React, { useState } from "react";

function SearchForm({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== "") {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <form className="formContainer active" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="btn" type="submit">
        <img src="./Images/search.png" alt="Search" width="20" height="20" />
      </button>
    </form>
  );
}

export default SearchForm;

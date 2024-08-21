// import React, { useState } from "react";

// function SearchForm({ onSearch }) {
//   const [city, setCity] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (city.trim() !== "") {
//       onSearch(city);
//       setCity("");
//     }
//   };

//   return (
//     <form className="formContainer active" onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Search for city..."
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//       />
//       <button className="btn" type="submit">
//         <img src="./Images/search.png" alt="Search" width="20" height="20" />
//       </button>
//     </form>
//   );
// }

// export default SearchForm;

import React, { useState } from "react";

function SearchForm({ onSearch }) {
  const [city, setCity] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = async (query) => {
    if (query.length > 2) {
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=09e1ad3038dafd7bc381e93027e778ed`
      );
      const data = await response.json();
      setSuggestions(data);
    } else {
      setSuggestions([]);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setCity(value);
    fetchSuggestions(value);
  };

  const handleSuggestionClick = (suggestion) => {
    const fullLocation = `${suggestion.name}, ${
      suggestion.state ? suggestion.state + ", " : ""
    }${suggestion.country}`;
    setCity(fullLocation);
    setSuggestions([]);
    onSearch(fullLocation);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== "") {
      onSearch(city);
      setCity("");
      setSuggestions([]);
    }
  };

  return (
    <form className="formContainer active" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for city..."
        value={city}
        onChange={handleChange}
      />
      <button className="btn" type="submit">
        <img src="./Images/search.png" alt="Search" width="20" height="20" />
      </button>

      {suggestions.length > 0 && (
        <ul className="suggestionsDropdown">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.lat + suggestion.lon}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion.name}
              {suggestion.state ? `, ${suggestion.state}` : ""},{" "}
              {suggestion.country}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}

export default SearchForm;

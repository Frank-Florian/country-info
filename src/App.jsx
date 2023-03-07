import React, { useState } from "react";
import Country from "./assets/components/Country";

const App = () => {
  const [showCountry, setShowCountry] = useState(false);
  const [countryCode, setCountryCode] = useState("per");

  const toggleCountry = () => {
    setShowCountry(!showCountry);
  };

  const handleCountryCodeChange = (event) => {
    setCountryCode(event.target.value);
  };

  return (
    <div>
      <h1>Información del país</h1>
      <label htmlFor="country-code">Código de país:</label>
      <input
        id="country-code"
        type="text"
        value={countryCode}
        onChange={handleCountryCodeChange}
      />
      <button onClick={toggleCountry}>
        {showCountry ? "Ocultar país" : "Mostrar país"}
      </button>
      {showCountry && <Country countryCode={countryCode} />}
    </div>
  );
};

export default App;

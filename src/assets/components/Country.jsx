import React, { useState, useEffect } from "react";
import axios from "axios";

const Country = ({ countryCode }) => {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v2/alpha/${countryCode}`)
      .then((response) => {
        setCountry(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [countryCode]);

  if (!country) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{country.name}</h2>
      <img src={country.flag} alt={`${country.name} flag`} width="200" />
      <h3>Demography</h3>
      <p>Population: {country.population}</p>
      <p>Area: {country.area} km²</p>
      <h3>Location</h3>
      <p>Continent: {country.region}</p>
      <p>Region: {country.subregion}</p>
      <p>Subregion: {country.subregion}</p>
      <h3>Capital</h3>
      <p>{country.capital}</p>
    </div>
  );
};

export default Country;
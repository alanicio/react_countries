import React, { createContext, useState, useEffect } from "react";
import { filterCountries, getCountries } from "../helpers";

export const CountriesContext = createContext();

const CountriesProvider = (props) => {
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");

  
  useEffect(() => {
    let url;
    if (region.length === 0) {
      url = "https://restcountries.eu/rest/v2/all";
    } else {
      url = `https://restcountries.eu/rest/v2/region/${region}`;
    }
    getCountries(url, search, setCountries);
    //eslint-disable-next-line
  }, [region]);

  useEffect(() => {
    if (search.length > 0) {
      setCountries(filterCountries(search, countries));
    }
    //eslint-disable-next-line
  }, [search]);

  return (
    <CountriesContext.Provider
      value={{ countries, region, search, setRegion, setSearch }}
    >
      {props.children}
    </CountriesContext.Provider>
  );
};

export default CountriesProvider;
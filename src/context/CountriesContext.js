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
    getCountries(url, setCountries);
    //eslint-disable-next-line
  }, [region]);

  return (
    <CountriesContext.Provider
      value={{
        countries: filterCountries(search, countries),
        region,
        search,
        setRegion,
        setSearch,
        loader: countries.length === 0 ? true: false,
      }}
    >
      {props.children}
    </CountriesContext.Provider>
  );
};

export default CountriesProvider;

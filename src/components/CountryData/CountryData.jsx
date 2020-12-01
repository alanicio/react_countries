import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import { getCountry } from "../../helpers";
import { CountryDataLabel } from "./styled";

const emptyCountry = {
  name:'',
  nativeName:'',
  population:'',
  region:'',
  subregion:'',
  capital:'',
  topLevelDomain:[],
  currencies:[],
  languages:[],
  borders:[],
};

const CountryData = () => {
  const { theme } = useContext(ThemeContext);
  const { bgColorSecondary, shadowBox, color } = theme;
  const [country, setCountry] = useState(emptyCountry);
  const { countryName } = useParams();
  useEffect(() => {
    getCountry(countryName, setCountry);
  }, [countryName]);

  const {
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = country;

  return (
    <>
        <Link to={"/"}>
      <button>
          <i className="fas fa-long-arrow-alt-left"></i>
          Back
      </button>
        </Link>
      <h1>{name}</h1>
      <CountryDataLabel>
        <p>
          <span>Native Name:</span> {nativeName}
        </p>
        <p>
          <span>Population:</span> {population}
        </p>
        <p>
          <span>Region:</span> {region}
        </p>
        <p>
          <span>Sub Region:</span> {subregion}
        </p>
        <p>
          <span>Capital:</span> {capital}
        </p>
        <p>
          <span>Top Level Domain:</span> {topLevelDomain}
        </p>
        <p>
          <span>Currencies:</span> {currencies.map( ({name}) => `${name},` )}
        </p>
        <p>
          <span>Languages:</span> {languages.map( ({name}) => `${name},` )}
        </p>
        
      </CountryDataLabel>
      {borders.map(border => <button>{border}</button>)}
    </>
  );
};

export default CountryData;

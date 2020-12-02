import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import { getCountry } from "../../helpers";
import { Button, CountryDataContainer, CountryDataLabel, Row } from "./styled";

const emptyCountry = {
  name: "",
  nativeName: "",
  population: "",
  region: "",
  subregion: "",
  capital: "",
  topLevelDomain: [],
  currencies: [],
  languages: [],
  borders: [],
  flag: "",
};

const CountryData = () => {
  const { theme } = useContext(ThemeContext);
  const { bgColorSecondary, bgColor, shadowBox, color } = theme;
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
    flag,
  } = country;
  return (
    <CountryDataContainer color={bgColor}>
      <Row>
        <Link to={"/"}>
          <Button
            bgColor={bgColorSecondary}
            color={color}
            shadowBox={shadowBox}
          >
            <i className="fas fa-long-arrow-alt-left"></i>
            Back
          </Button>
        </Link>
      </Row>

      <img src={flag} alt={name} />
      <CountryDataLabel color={color}>
        <h1>{name}</h1>
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
          <span>Currencies:</span> {currencies.map(({ name }) => `${name},`)}
        </p>
        <p>
          <span>Languages:</span> {languages.map(({ name }) => `${name},`)}
        </p>
        <p>
          <span>Border Countries:</span>
          {borders.map((border) => (
            <Link to={`/${border}`} >
              <Button
                key={border}
                bgColor={bgColorSecondary}
                color={color}
                shadowBox={shadowBox}
              >
                {border}
              </Button>
            </Link>
          ))}
        </p>
      </CountryDataLabel>
    </CountryDataContainer>
  );
};

export default CountryData;

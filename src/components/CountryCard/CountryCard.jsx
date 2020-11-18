import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Card, CountryLabel } from "./styled";
import PropTypes from "prop-types";

const CountryCard = ({ flag, name, population, region, capital }) => {
  const { theme } = useContext(ThemeContext);
  const { bgColorSecondary, shadowBox, color } = theme;

  return (
    <Card bgColor={bgColorSecondary} shadowBox={shadowBox}>
      <img src={flag} alt={name} />

      <CountryLabel color={color}>
        <h3>{name}</h3>
        <p>
          <span>Population:</span> {population}
        </p>
        <p>
          <span>Region:</span> {region}
        </p>
        <p>
          <span>Capital:</span> {capital}
        </p>
      </CountryLabel>
    </Card>
  );
};

CountryCard.propTypes = {
  flag: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
};

export default CountryCard;

import React, { useContext } from "react";
import { CountriesContext } from "../../context/CountriesContext";
import { ThemeContext } from "../../context/ThemeContext";
import CountryCard from "../CountryCard/CountryCard";
import FilterTools from "../FilterTools/FilterTools";
import { CountriesListContainer } from "./styled";

const CountriesList = () => {
  const { theme } = useContext(ThemeContext);
  const { bgColor } = theme;

  const { countries } = useContext(CountriesContext);

  return (
    <>
      <FilterTools />
      <CountriesListContainer bgColor={bgColor}>
        {countries.map(({ flag, name, population, region, capital }) => (
          <CountryCard
            key={name}
            flag={flag}
            name={name}
            population={population}
            region={region}
            capital={capital}
          />
        ))}
      </CountriesListContainer>
    </>
  );
};

export default CountriesList;

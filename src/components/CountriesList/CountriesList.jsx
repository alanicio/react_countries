import React, { useContext } from "react";
import Loader from "react-loader-spinner";
import { CountriesContext } from "../../context/CountriesContext";
import { ThemeContext } from "../../context/ThemeContext";
import CountryCard from "../CountryCard/CountryCard";
import FilterTools from "../FilterTools/FilterTools";
import { CountriesListContainer, LoaderZone } from "./styled";

const CountriesList = () => {
  const { theme } = useContext(ThemeContext);
  const { bgColor, color } = theme;

  const { countries, loader } = useContext(CountriesContext);
  if(loader) {
    return(
      <LoaderZone color={bgColor}>        
        <Loader
          type="Circles"
          color={color}
          height={300}
          width={300}  
        />        
      </LoaderZone>
     );
  }

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

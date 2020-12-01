import React, { useContext } from "react";
import { CountriesContext } from "../../context/CountriesContext";
import { ThemeContext } from "../../context/ThemeContext";
import { Container, InputText, Select } from "./styled";

const FilterTools = () => {
  const { theme } = useContext(ThemeContext);
  const { bgColor, bgColorSecondary, color, colorSecondary, shadowBox } = theme;
  const { search, region, setSearch, setRegion } = useContext(CountriesContext);

  return (
    <Container bgColor={bgColor}>
      <InputText
        bgColor={bgColorSecondary}
        color={colorSecondary}
        shadowBox={shadowBox}
      >
        <i className="fas fa-search"></i>
        <input
          type="text"
          placeholder="Search for a country..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          data-testid="input"
        />
      </InputText>

      <div>
        <Select
          bgColor={bgColorSecondary}
          color={color}
          shadowBox={shadowBox}
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          data-testid="select"
        >
          <option value="">{region === "" ? "Filter by Region" : "All"}</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </Select>
      </div>
    </Container>
  );
};

export default FilterTools;

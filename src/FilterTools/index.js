import React from "react";
import { Container, InputText, Select } from "./styled";

const FilterTools = () => {
  const bgColor = "#fafafa";
  const bgColorSecondary = "#ffffff";
  const color = "black";
  const colorSecondary = "#7c7c7c";

  return (
    <Container bgColor={bgColor}>
      <InputText bgColor={bgColorSecondary} color={colorSecondary}>
        <i class="fas fa-search"></i>
        <input type="text" placeholder="Search for a country..." />
      </InputText>

      <div>
        <Select bgColor={bgColorSecondary} color={color}>
          <option>Filter by Region</option>
        </Select>
      </div>
    </Container>
  );
};

export default FilterTools;

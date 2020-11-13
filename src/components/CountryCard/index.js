import React from "react";
import { Card, CountryLabel } from "./styled";

const CountryCard = () => {
  const bgColor = "#ffffff";

  return (
    <Card bgColor={bgColor}>
      <img
        src="https://i.pinimg.com/originals/67/54/78/675478c7dcc17f90ffa729387685615a.jpg"
        alt="Girl in a jacket"
      />

      <CountryLabel>        
        <h3>Country</h3>
        <p>
          <span>Population:</span> 323 000 000{" "}
        </p>
        <p>
          <span>Region:</span> Region{" "}
        </p>
        <p>
          <span>Capital:</span> Capital{" "}
        </p>
      </CountryLabel>
    </Card>
  );
};

export default CountryCard;

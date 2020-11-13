import React from "react";
import { Button, Container } from "./styled";

const Header = () => {
  const color = "black";
  const bgColor = "#ffffff";

  return (
    <Container bgColor={bgColor} color={color}>
      <div>
        <h3>Where in the world?</h3>
      </div>
      <div>
        <Button color={color}>
          <i className="far fa-moon"></i> Dark Mode
        </Button>
      </div>
    </Container>
  );
};

export default Header;

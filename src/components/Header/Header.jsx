import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Button, Container } from "./styled";

const Header = () => {
  const { theme, switchTheme } = useContext(ThemeContext);
  const { id, color, bgColor, shadowBox } = theme;

  return (
    <Container
      bgColor={bgColor}
      color={color}
      shadowBox={shadowBox}
      data-testid="Header"
    >
      <div>
        <h3>Where in the world?</h3>
      </div>
      <div>
        <Button
          color={color}
          data-testid="btnChangeTheme"
          onClick={switchTheme}
        >
          {id === 0 ? (
            <>
              <i className="far fa-moon" data-testid="lightMoon"></i> Dark Mode
            </>
          ) : (
            <>
              <i className="fas fa-moon" data-testid="darkMoon"></i> Light Mode
            </>
          )}
        </Button>
      </div>
    </Container>
  );
};

export default Header;

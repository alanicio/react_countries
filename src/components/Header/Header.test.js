import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "./Header";
import userEvent from "@testing-library/user-event";
import ThemeProvider from "../../context/ThemeContext";


test('<Header /> Changing theme', () => {
  render(
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );

  const button = screen.getByTestId("btnChangeTheme");

  expect(button.textContent).toBe(" Dark Mode");
  expect(button.textContent).not.toBe(" Light Mode");

  userEvent.click(button);

  expect(button.textContent).not.toBe(" Dark Mode");
  expect(button.textContent).toBe(" Light Mode");

  userEvent.click(button);

  expect(button.textContent).toBe(" Dark Mode");
  expect(button.textContent).not.toBe(" Light Mode");
})

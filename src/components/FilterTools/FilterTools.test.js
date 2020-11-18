import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FilterTools from "./FilterTools";
import ThemeProvider from "../../context/ThemeContext";
import userEvent from "@testing-library/user-event";
import CountriesProvider from "../../context/CountriesContext";
import mockAxios from "axios";

const countries = [];
const region = "";
const search = "";

const setRegion = jest.fn();
const setSearch = jest.fn();

test('<FilterTools /> Typing in input', () => {
  
  render(
    <ThemeProvider>      
      <CountriesProvider value={{ countries, region, search, setRegion, setSearch }}>
        <FilterTools />
      </CountriesProvider>
    </ThemeProvider>
  );
  
  const input = screen.getByTestId("input");
  expect(input).toHaveValue("");

  userEvent.type(input,"Mexico");
  expect(input).toHaveValue("Mexico");
  userEvent.clear(input);

  userEvent.type(input,"México");
  expect(input).toHaveValue("México");
  userEvent.clear(input);

  userEvent.type(input,"mExico");
  expect(input).toHaveValue("mExico");
  userEvent.clear(input);

  userEvent.type(input," ");
  expect(input).toHaveValue(" ");
  userEvent.clear(input);

  expect(input).toHaveValue("");
})

import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
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

test('<FilterTools /> Typing in input', async () => {
  
  mockAxios.get = jest.fn().mockResolvedValue({
    data: []
  });

  render(
    <ThemeProvider>      
      <CountriesProvider value={{ countries, region, search, setRegion, setSearch }}>
        <FilterTools />
      </CountriesProvider>
    </ThemeProvider>
  );

  await waitFor(() => expect(mockAxios.get).toHaveBeenCalledTimes(1));

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
});

test('<FilterTools /> Testing select', async () => {
  
  mockAxios.get = jest.fn().mockResolvedValue({
    data: []
  });

  render(
    <ThemeProvider>      
      <CountriesProvider value={{ countries, region, search, setRegion, setSearch }}>
        <FilterTools />
      </CountriesProvider>
    </ThemeProvider>
  );

  await waitFor(() => expect(mockAxios.get).toHaveBeenCalledTimes(1));

  const select = screen.getByTestId("select");
  expect(select).toHaveValue("");

  userEvent.selectOptions(select,"Americas");
  await waitFor(() => expect(mockAxios.get).toHaveBeenCalledTimes(2));
  expect(select).toHaveValue("Americas");

  userEvent.selectOptions(select,"Africa");
  await waitFor(() => expect(mockAxios.get).toHaveBeenCalledTimes(3));
  expect(select).toHaveValue("Africa");

});
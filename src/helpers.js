import axios from "axios";

export const getCountries = async (url, setCountries) => {
  const api = await axios.get(url);
  const countries = api.data;
  setCountries(countries);
};

export const filterCountries = (search, countries) => {
  const filteredCountries = countries.filter(({ name, capital, region }) => {
    if (
      name.toLowerCase().includes(search.toLowerCase().trim()) ||
      capital.toLowerCase().includes(search.toLowerCase().trim()) ||
      region.toLowerCase().includes(search.toLowerCase().trim())
    ) {
      return true;
    }
    return false;
  });
  return filteredCountries;
};

export const getCountry = async (country, setCountry) => {
  const api = await axios.get(
    `https://restcountries.eu/rest/v2/name/${country}?fullText=true`
  );
  country = api.data[0];
  const borders = country.borders;
  let bordersString = "";
  borders.forEach((border) => {
    bordersString = `${bordersString}${border};`;
  });
  if(bordersString.length > 0){
    const apiBorders = await axios.get(
      `https://restcountries.eu/rest/v2/alpha?codes=${bordersString}`
    );
    country.borders = apiBorders.data.map(({ name }) => name);
  }
  setCountry(country);
};

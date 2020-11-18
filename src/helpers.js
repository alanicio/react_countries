import axios from "axios"

export const getCountries = async (url, search, setCountries) => {
  let api = await axios.get(url);
  let countries = api.data;
  countries = filterCountries(search,countries);
  setCountries(countries);
}

export const filterCountries = (search, countries) => {
  const filteredCountries = countries.filter( ( { name, capital, region, subregion } ) => {
    if( 
      name.toLowerCase().includes( search.toLowerCase().trim() ) ||
      capital.toLowerCase().includes( search.toLowerCase().trim() ) ||
      region.toLowerCase().includes( search.toLowerCase().trim() ) ||
      subregion.toLowerCase().includes( search.toLowerCase().trim() )
    ) {
      return true;
    }
      return false;
  } );
  return filteredCountries;
}


import axios from "axios"

export const getCountries = async (url, setCountries) => {
  let api = await axios.get(url);
  let countries = api.data;
  setCountries(countries);
}

export const filterCountries = (search, countries) => {
  const filteredCountries = countries.filter( ( { name, capital, region } ) => {
    if( 
      name.toLowerCase().includes( search.toLowerCase().trim() ) ||
      capital.toLowerCase().includes( search.toLowerCase().trim() ) ||
      region.toLowerCase().includes( search.toLowerCase().trim() ) 
    ) {
      return true;
    }
      return false;
  } );
  return filteredCountries;
}


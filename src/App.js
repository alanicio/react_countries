import React from 'react';
import Header from './components/Header/Header';
import FilterTools from './components/FilterTools/FilterTools';
import CountriesList from './components/CountriesList/CountriesList';
import ThemeProvider from './context/ThemeContext';
import CountriesProvider from './context/CountriesContext';

function App() {
  return (
    <ThemeProvider>
      <CountriesProvider>
        <Header />
        <FilterTools />
        <CountriesList />
      </CountriesProvider>
    </ThemeProvider>
  );
}

export default App;

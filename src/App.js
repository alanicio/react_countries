import React from 'react';
import Header from './components/Header/Header';
import CountriesList from './components/CountriesList';
import FilterTools from './components/FilterTools';
import ThemeProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <FilterTools />
      <CountriesList />
    </ThemeProvider>
  );
}

export default App;

import React from 'react';
import Header from './components/Header';
import CountriesList from './components/CountriesList';
import FilterTools from './components/FilterTools';

function App() {
  return (
    <>
      <Header />
      <FilterTools />
      <CountriesList />
    </>
  );
}

export default App;

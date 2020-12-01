import React from 'react';
import Header from './components/Header/Header';
import CountriesList from './components/CountriesList/CountriesList';
import ThemeProvider from './context/ThemeContext';
import CountriesProvider from './context/CountriesContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CountryData from './components/CountryData/CountryData';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <CountriesProvider>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={CountriesList}/>
              <Route exact path="/:country" component={CountryData}/>
            </Switch>
          </div>
        </CountriesProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

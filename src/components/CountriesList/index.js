import React from 'react'
import CountryCard from '../CountryCard';
import { Container } from './styled'

const CountriesList = () => {
  const bgColor = "#fafafa";

  return (
    <Container bgColor={bgColor}>
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
    </Container>
  )
}

export default CountriesList

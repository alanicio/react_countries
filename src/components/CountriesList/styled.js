import styled from "@emotion/styled";

export const CountriesListContainer = styled.div`
  display: flex;
  background-color: ${ ({bgColor}) => bgColor };
  min-height: 82.2vh;
  flex-flow: row wrap;
  padding: 0 2rem;

  @media(max-width: 480px) {
    padding: 0 0;
  }

`;

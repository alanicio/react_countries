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

export const LoaderZone = styled.div`
  padding-top: 12rem;
  display: flex;
  justify-content: center;
  background-color: ${ ({color}) => color };
  min-height: 74vh;
`;

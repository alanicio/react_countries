import styled from "@emotion/styled";


export const Card = styled.div`
  background-color: ${ ({bgColor}) => bgColor };
  margin: 2rem;
  border-radius: 8px;
  cursor: pointer;
  
  max-width: 264px;
  max-height: 342.63px;

  -webkit-box-shadow: ${({ shadowBox }) => shadowBox};
  -moz-box-shadow: ${({ shadowBox }) => shadowBox};
  box-shadow: ${({ shadowBox }) => shadowBox};

  a {text-decoration: none;}

  img {
    width: 264px;
    height: 176px;
    border-radius: 8px 8px 0 0;
  }
`;

export const CountryLabel = styled.div`
  padding: 1rem;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 300;
  color: ${({ color }) => color};

  h3 {
    max-width: 258px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  p{
    font-size: 14px;
    line-height: 0.6;
    font-weight: 300;
  }

  span {
    font-weight: 600;
  }
`;
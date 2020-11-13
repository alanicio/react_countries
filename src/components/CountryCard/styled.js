import styled from "@emotion/styled";


export const Card = styled.div`
  background-color: ${ ({bgColor}) => bgColor };
  margin: 2rem;
  border-radius: 8px;
  cursor: pointer;

  -webkit-box-shadow: 0px 0px 5px 3px rgba(239, 239, 239, 1);
  -moz-box-shadow: 0px 0px 5px 3px rgba(239, 239, 239, 1);
  box-shadow: 0px 0px 5px 3px rgba(239, 239, 239, 1);

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

  p{
    font-size: 14px;
    line-height: 0.6;
    font-weight: 300;
  }

  span {
    font-weight: 600;
  }
`;
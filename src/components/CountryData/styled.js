import styled from "@emotion/styled";

export const CountryDataContainer = styled.div`
  background-color: ${({ color }) => color};
  min-height: 93.6vh;
  padding: 0 4rem;

  img {
    width: 600px;
    height: 400px;
  }

  @media (max-width: 750px) {
    img {
      width: 400px;
      height: 266.66px;
    }
  }

  @media (max-width: 500px) {
    img {
      width: 300px;
      height: 200px;
    }
  }

  @media (max-width: 400px) {
    padding: 0 2rem;
  }
`;

export const Row = styled.div`
  width: 100%;
  padding: 1rem 0;
`;

export const Button = styled.button`
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  border-radius: 8px;
  border: none;
  padding: 0.75rem 1.5rem;
  margin: 0.5rem 0.5rem;

  -webkit-box-shadow: ${({ shadowBox }) => shadowBox};
  -moz-box-shadow: ${({ shadowBox }) => shadowBox};
  box-shadow: ${({ shadowBox }) => shadowBox};

  cursor: pointer;

  i {
    margin-right: 0.5rem;
  }
`;

export const CountryDataLabel = styled.div`
  padding: 1rem;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 300;
  color: ${({ color }) => color};
  display: inline-block;
  vertical-align: top;
  padding-left: 5rem;

  h3 {
    max-width: 258px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  p {
    font-size: 14px;
    line-height: 0.6;
    font-weight: 300;
    max-width: 900px;
  }

  span {
    font-weight: 600;
  }

  div {
    display: inline-block;
    max-width: 700px;
    vertical-align: top;
    margin-right: 1rem;
  }

  @media (max-width: 1667px) {
    padding: 0 0 2rem 0;
    display: block;
  }
`;

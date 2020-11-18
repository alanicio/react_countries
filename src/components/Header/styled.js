import styled from "@emotion/styled";

export const Container = styled.header`
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  display: flex;
  padding: 0 4rem;
  margin-bottom: 5px;
  font-family: Arial, Helvetica, sans-serif;
  -webkit-box-shadow: ${({ shadowBox }) => shadowBox};
  -moz-box-shadow: ${({ shadowBox }) => shadowBox};
  box-shadow: ${({ shadowBox }) => shadowBox};

  div {
    &:nth-of-type(2) {
      margin-left: auto;
    }
  }

  @media (max-width: 480px) {
    padding: 0 2rem;
  }
`;

export const Button = styled.button`
  margin-top: 20px;
  background-color: transparent;
  border: none;
  color: ${({ color }) => color};
  cursor: pointer;
`;

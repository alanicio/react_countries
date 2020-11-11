import styled from "@emotion/styled";

export const Container = styled.div`
  background-color: ${({ bgColor }) => bgColor};
  padding: 30px 4rem;
  display: flex;

  div {
    &:nth-of-type(2) {
      margin-left: auto;
    }
  }
`;

export const InputText = styled.div`
  background-color: ${({ bgColor }) => bgColor};
  padding: 1rem 2rem;
  border-radius: 5px;
  color: ${({ color }) => color};

  -webkit-box-shadow: 0px 0px 5px 3px rgba(239, 239, 239, 1);
  -moz-box-shadow: 0px 0px 5px 3px rgba(239, 239, 239, 1);
  box-shadow: 0px 0px 5px 3px rgba(239, 239, 239, 1);

  input {
    border: none;
    background-color: transparent;
    color: ${({ color }) => color};
    margin-left: 1rem;
  }
`;

export const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance:    none;
  appearance:         none;

  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  border: none;
  padding: 1rem 2rem;
  border-radius: 4px;

  -webkit-box-shadow: 0px 0px 5px 3px rgba(239, 239, 239, 1);
  -moz-box-shadow: 0px 0px 5px 3px rgba(239, 239, 239, 1);
  box-shadow: 0px 0px 5px 3px rgba(239, 239, 239, 1);
`;

import styled from "@emotion/styled";


export const Container = styled.header`
  background-color: ${ ({bgColor}) => bgColor };
  color: ${ ({color}) => color };
  display:flex;
  padding: 0 4rem;
  margin-bottom: 5px;
  font-family: Arial, Helvetica, sans-serif;
  -webkit-box-shadow: 0px 5px 5px 0px rgba(239,239,239,0.7);
  -moz-box-shadow: 0px 5px 5px 0px rgba(239,239,239,0.7);
  box-shadow: 0px 5px 5px 0px rgba(239,239,239,0.7);

  div {
    &:nth-of-type(2){
      margin-left:auto;
    }
  }
`;

export const Button = styled.button`
  margin-top: 20px;
  background-color: transparent;
  border: none;
  color: ${ ({color}) => color };
`;
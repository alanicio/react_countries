import styled from "@emotion/styled";


export const CountryDataLabel = styled.div`
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
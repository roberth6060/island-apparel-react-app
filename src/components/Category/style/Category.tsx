import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 50px;

 @media screen and (max-width:1020px) {
  grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width:800px) {
    column-gap: 5px;
    justify-content: space-evenly;
    justify-items: center;
    align-content: space-evenly;
    align-items: center; 

    grid-template-columns: repeat(2, 1fr);
  }
    @media screen and (max-width:600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CategoryTitle = styled.h1`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`;

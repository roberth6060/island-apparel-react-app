import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  width: 100%;
`;

export const Title = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 50px;
   @media screen and (max-width:1020px) {
  grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width:800px) {
 
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

import styled from "styled-components";

export const CheckOutContainer = styled.div`
  width: 60vw;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  .total {
    margin-top: 30px;
    margin-left: auto;
    font-size: 25px;
     @media screen and (max-width:800px) {
    font-size: 20px;
  }
  }
  @media screen and (max-width:1020px) {
  width: 90%;
  }
  @media screen and (max-width:800px) {
  width: 100%;
  }
  
`;

export const CheckOutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgray;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;
   @media screen and (max-width:1100px) {
    width: 27%;
  }
  @media screen and (max-width:800px) {
    width: 90%;
  }
  @media screen and (max-width:600px) {
    width: 95%;
  }
  &:last-child {
    width: 8%;
    text-align: end;
    @media screen and (max-width:1100px) {
    width: 10%;
  }
   @media screen and (max-width:800px) {
       width: 9%;
  }
  @media screen and (max-width:600px) {
   width: 15%;
  }
  }
`;

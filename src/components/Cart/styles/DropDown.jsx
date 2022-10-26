import styled from "styled-components";

export const CartDropDownContainer = styled.div`
  position: absolute;
  width: 300px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #fff6bf;
  top: 110px;
  right: 40px;
  z-index: 5;

  button {
    margin-top: auto;
  }
`;

export const CartItems = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
// .cart-dropdown-container {

//   .empty-message {
//     font-size: 18px;
//     margin: 50px auto;
//   }

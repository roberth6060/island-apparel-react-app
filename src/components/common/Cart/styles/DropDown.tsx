import {
  BaseButton,
  InvertedButton,
  GoogleSignInButton,
} from "../../Button/style/Button";
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

  ${BaseButton}, ${InvertedButton}, ${GoogleSignInButton} {
    margin-top: auto;
  }
  @media screen and (max-width:800px) {
    top: 160px;
    right: 0;
      width: 260px;
  }
`;

export const CartItems = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const EmptyMessage = styled.span`
background-color: red;
  font-size: 18px;
  margin: 50px auto;
`;

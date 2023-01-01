import styled from "styled-components";
import { ReactComponent as ShoppingImg } from "../../../../assets/shopping-bag-svgrepo-com.svg";

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const ItemCount = styled.span`
  position: absolute;
  font-size: 15px;
  font-weight: bold;
  bottom: 10px;
  color: #fff;
  @media screen and (max-width:800px) {
 margin-left: 20px;
  }
`;
export const ShoppingIcon = styled(ShoppingImg)`
  width: 35px;
  height: 35px;
  @media screen and (max-width:800px) {
  position: absolute;

 left: 15px;
  }
`;

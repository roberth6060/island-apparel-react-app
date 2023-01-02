import styled from "styled-components";
import Button from "../../Button/Button";

export const PaymentContainer = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  padding-bottom: 60px;
  @media screen and (max-width:1020px) {
  width: 85%;
  }
  @media screen and (max-width:800px) {
  width: 90%;
  }
  @media screen and (max-width:600px) {
  width: 95%;
  }
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 100%;
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
`;

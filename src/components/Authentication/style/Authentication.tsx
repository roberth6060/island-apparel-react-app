import styled from "styled-components";

export const AuthContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 900px;
  max-width: 100%;
  margin: 30px auto;

  @media screen and (max-width:900px) {
  align-items: center;
  width: 100%;
  justify-content: center;
  flex-direction: column;
}
`;

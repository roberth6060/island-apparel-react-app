import styled from "styled-components";
import { Link } from "react-router-dom";
import MyLogo  from "../../../assets/logo.png"

export const Logo = styled.img`
  width: 230px;
`
Logo.defaultProps = {
  src:MyLogo,
}
export const MenuButton = styled.span`
&, 
&::before,
&::after {
  display: block;
  background-color: #4e6c50;
  position: absolute;
  height: 4px;
  width: 30px;
  transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
  border-radius: 2px;
}
&::before {
  content: "";
  margin-top: -8px;
}
&::after {
  content: "";
  margin-top: 8px;
}
`
export const MenuButtonContainer = styled.label.attrs({for: 'menu-toggle'})`
 display: none;
  height: 100%;
  width: 30px;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;

@media screen and (max-width:800px) {
  display: flex;
  width: 40px;
  height: 40px;

}
`

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0;
  padding: 0;
  li {
    margin: 0 3px;
    overflow: hidden;
    padding: 5px 10px;
    a {
      width: 100%;
    }
    &:hover:not(.active) {
      background-color: #4e6c50;
      transition: 0.2s;
      transform: skew(-5deg);
      a {
        color: #fff;
      }
    }
  }
a {
    padding: 10px 20px;
}

@media screen and (max-width:800px) {
  background-color: #fff6bf;
  position: absolute;
  top: 15px;
  right: 10px;
  flex-direction: column;
  width: 260px;
  justify-content: center;
  margin-top: 85px;
  z-index: 5;
}

`;

export const MenuToggle = styled.input.attrs({ id: 'menu-toggle',type: 'checkbox' })`
  display: none;
  &:checked + ${MenuButtonContainer} ${MenuButton}::before {
    margin-top: 0px;
    transform: rotate(405deg);
  }
  &:checked + ${MenuButtonContainer} ${MenuButton} {
  background: rgba(255, 255, 255, 0);

 
  }
  &:checked + ${MenuButtonContainer} ${MenuButton}::after {
  margin-top: 0px;
  transform: rotate(-405deg);
  }

  @media screen and (max-width:800px) {
    & ~ ${Menu} {
    display: none;
    transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  &:checked ~ ${Menu} {
    display: block;
    transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
  }
}
`
export const NavbarContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 35px 20px;
  background-color: #fff6bf;
  height: 5vh;
  margin: 20px 0;
`;

export const NavLink = styled(Link)`
  list-style: none;
  display: flex;
  align-items: center;
`;



import styled from "styled-components";
import { Link } from "react-router-dom";


export const NavbarContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 35px 20px;
  background-color: #fff6bf;
  height: 5vh;
  margin: 20px 0;

  .menu-button-container {
  display: none;
  height: 100%;
  width: 30px;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#menu-toggle {
  display: none;
}

.menu-button,
.menu-button::before,
.menu-button::after {
  display: block;
  background-color: #4e6c50;
  position: absolute;
  height: 4px;
  width: 30px;
  transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
  border-radius: 2px;
}

.menu-button::before {
  content: "";
  margin-top: -8px;
}

.menu-button::after {
  content: "";
  margin-top: 8px;
}

#menu-toggle:checked + .menu-button-container .menu-button::before {
  margin-top: 0px;
  transform: rotate(405deg);
}

#menu-toggle:checked + .menu-button-container .menu-button {
  background: rgba(255, 255, 255, 0);
}

#menu-toggle:checked + .menu-button-container .menu-button::after {
  margin-top: 0px;
  transform: rotate(-405deg);
}

  @media screen and (max-width:800px) {
      .menu-button-container {
      display: flex;
    }
  }

  
`;


export const NavLink = styled(Link)`
  list-style: none;
  display: flex;
  align-items: center;
`;

export const LogoContainer = styled(Link)`
    display: flex;
    gap: 5px;
    align-items: center;

    img {
      width: 50px;
    }
    span {
      font-size: 17px;
      font-family: "Raleway";
      color: #0a2c46;
    }
`;

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
    position: absolute;
    top: 0;
    margin-top: 85px;
    left: 0;
    flex-direction: column;
    width: 100%;
    justify-content: center;

    #menu-toggle ~ li {
    height: 0;
    margin: 0;
    padding: 0;
    border: 0;
    transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  #menu-toggle:checked ~ li {
    border: 1px solid #333;
    height: 2.5em;
    padding: 0.5em;
    transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  .menu > li {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0.5em 0;
    width: 100%;
    color: red;
    background-color: $bg;
  }
  .menu > li:not(:last-child) {
    border-bottom: 1px solid #444;
  }

  .menu {
    li {
      &:hover:not(.active) {
        transform: skew(0deg);
      }
    }
  }
}

`;

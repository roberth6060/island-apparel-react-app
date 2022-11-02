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

  a {
    text-decoration: none;
    color: black;
  }

  input[type="checkbox"] {
    display: none;
  }
  .hamburger {
    display: none;
    font-size: 24px;
    user-select: none;
    cursor: pointer;
  }
  @media (max-width: 804px) {
    .hamburger {
      display: block;
    }
  }
`;

export const NavLink = styled(Link)`
  list-style: none;
  display: flex;
  align-items: center;
`;

export const LogoContainer = styled(Link)`
  img {
    width: 250px;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  font-size: 18px;
  gap: 1em;
  z-index: 1;
  align-items: center;

  a {
    padding: 5px;
    min-width: 3.5em;
    height: 35px;
    font-size: 1em;
    text-align: center;
    justify-content: center;

    &:hover {
      background-color: rgba(255, 0, 0, 0.8);

      transition: 0.5s ease;
    }
  }

  @media (max-width: 804px) {
    top: 60px;
    display: none;
    position: absolute;
    right: 0;
    left: 0;
    text-align: center;
    padding: 16px 0;
    margin: 29px;

    a {
      text-align: left;
    }

    li {
      a:hover {
        display: inline-block;
        transition: 0.3s ease;
      }
    }

    li + li {
      margin-top: 12px;
      width: auto;
    }

    .hamburger {
      display: block;
    }
  }
`;

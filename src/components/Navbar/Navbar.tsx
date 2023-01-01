//Fragment: A component that gets rendered to nothing when it gets mounted on the DOM:
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CartIcon from "../common/Cart/CartIcon";
import CartDropDown from "../common/Cart/DropDown";
import {
  NavbarContainer,
  LogoContainer,
  NavLink,
  Menu,
} from "./style/Navbar";
import Logo from "../../assets/logo.png";
import { selectCurrentUser } from "../../store/user/userSelector";
import { selectIsCartOpen } from "../../store/cart/cartSelector";
import { signOutStart } from "../../store/user/userAction";

const Navbar = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector(selectCurrentUser);
  //Conditionally render cart drop based on  isCartOpen
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());

  return (
    <Fragment>
      <NavbarContainer>
        <LogoContainer to="/">
          <img src={Logo} alt="logo" />
        </LogoContainer>
        <input id="menu-toggle" type="checkbox" />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <span className="menu-button"></span>
        </label>
        <Menu>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          {/* <NavLink to="/contact">Contact</NavLink> */}
          <NavLink to="/auth">
            {currentUser ? (
              <NavLink as="span" onClick={signOutUser}>
                Sign Out
              </NavLink>
            ) : (
              <NavLink as="span"> Sign In</NavLink>
            )}
          </NavLink>
          <CartIcon /> 
        {
          isCartOpen && <CartDropDown />
        }
         </Menu>
      </NavbarContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;

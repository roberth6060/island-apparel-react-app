//Fragment: A component that gets rendered to nothing when it gets mounted on the DOM:
import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { CartContext } from "../../context/CartContext";
import { signOutUser } from "../../utils/firebase";
import CartIcon from "../common/Cart/CartIcon";
import CartDropDown from "../common/Cart/DropDown";
import {
  NavbarContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./style/Navbar";
import Logo from "../../assets/logo.png";
import { selectCurrentUser } from "../../store/user/userSelector";

const Navbar = () => {
  /**
   * useSelector - hook to access redux store
   */
  const currentUser = useSelector(selectCurrentUser);
  //Conditionally render cart drop based on  isCartOpen
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavbarContainer>
        <LogoContainer to="/">
          <img src={Logo} alt="logo" />
        </LogoContainer>
        <NavLinks>
          <input type="checkbox" id="checkbox_toggle" />
          <label htmlFor="checkbox_toggle" className="hamburger">
            &#9776;
          </label>
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
        </NavLinks>
        {
          //Short-circuit operator (components are truthy values bs it is a function)
          isCartOpen && <CartDropDown />
        }
      </NavbarContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;

import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CartIcon from "../common/Cart/CartIcon";
import CartDropDown from "../common/Cart/DropDown";
import {
  NavbarContainer,
  Logo,
  NavLink,
  Menu,
  MenuToggle,
  MenuButtonContainer,
  MenuButton,
} from "./style/Navbar";
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
        <Logo/>
        <MenuToggle/>
        <MenuButtonContainer>
          <MenuButton/>
        </MenuButtonContainer>
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

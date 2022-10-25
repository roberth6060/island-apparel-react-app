//Fragment: A component that gets rendered to nothing when it gets mounted on the DOM:
import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { CartContext } from "../context/CartContext";
import { signOutUser } from "../utils/firebase";
import CartIcon from "../components/Cart/CartIcon";
import CartDropDown from "../components/Cart/DropDown";
import { NavbarContainer } from "./styles/Navbar";
import Logo from "../assets/logo.png";

const Navbar = () => {
  //Whenever value inside context is updated, DOM rerenders
  const { currentUser } = useContext(UserContext);
  //Conditionally render cart drop based on  isCartOpen
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavbarContainer>
        <Link className="logo-container" to="/">
          <img src={Logo} alt="logo" className="logo" width="280" />
        </Link>

        <ul className="nav-links">
          <input type="checkbox" id="checkbox_toggle" />
          <label htmlFor="checkbox_toggle" className="hamburger">
            &#9776;
          </label>
          <div className="menu">
            <li>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="shop-menu">
              <Link className="nav-link" to="/shop">
                Shop
              </Link>
              <ul className="dropdown">
                <li>
                  <Link className="nav-link" to="/shop">
                    All
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/shop">
                    Women
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/shop">
                    Men
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/auth">
                {currentUser ? (
                  <span className="nav-link" onClick={signOutUser}>
                    Sign Out
                  </span>
                ) : (
                  <span className="nav-link"> Sign In</span>
                )}
              </Link>
            </li>
            <li>
              <CartIcon />
            </li>
          </div>
        </ul>
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

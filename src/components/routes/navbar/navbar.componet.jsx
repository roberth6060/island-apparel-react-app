//Fragment: A component that gets rendered to nothing when it gets mounted on the DOM:
import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../../context/user.context";
import { CartContext } from "../../../context/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropDown from "../../cart-dropdown/cart-dropdown.component";

const Navbar = () => {
  //Whenever value inside context is updated, DOM rerenders
  const { currentUser } = useContext(UserContext);

  //Conditionally render cart drop based on  isCartOpen
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <nav className="navbar">
        <div id="logo">
          <Link to="/">
            <h1>
              <span role="img" aria-label="palm-tree">
                🌴
              </span>
              sland Apparel
            </h1>
          </Link>
        </div>
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
      </nav>
      <Outlet />
    </Fragment>
  );
};
export default Navbar;

//Fragment: A component that gets rendered to nothing when it gets mounted on the DOM:
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
const Navbar = () => (
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
        <label for="checkbox_toggle" className="hamburger">
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
            <Link className="nav-link" to="/sign-in">
              Sign In
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/cart">
              🛒
            </Link>
          </li>
        </div>
      </ul>
    </nav>
    <Outlet />
  </Fragment>
);
export default Navbar;

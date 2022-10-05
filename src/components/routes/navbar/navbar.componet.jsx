//Fragment: A component that gets rendered to nothing when it gets mounted on the DOM:
import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navbar = () => {
  //Whenever value inside context is updated, DOM rerenders
  const { currentUser, setCurrentUser } = useContext(UserContext);

  //Sign out handler linked to userContext
  const signOutHandler = async () => {
    //Sign user out of firebase
    await signOutUser();
    //Remove currentUser from useState
    setCurrentUser(null);
  };

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
                  <span className="nav-link" onClick={signOutHandler}>
                    Sign Out
                  </span>
                ) : (
                  <span className="nav-link"> Sign In</span>
                )}
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
};
export default Navbar;

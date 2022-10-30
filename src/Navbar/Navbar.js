import "./navbar.scss";
import { UserLoginContext } from "../App";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const isLoggedIn = useContext(UserLoginContext);
  return (
    <div>
      <ul className="nav">
        <li className="logo">Bio</li>

        <Link to="/">
          <li className="listItem" tabIndex="0">
            Profile
          </li>
        </Link>
        <Link to="/Preferences">
          <li className="listItem" tabIndex="0">
            Preferences
          </li>
        </Link>

        <Link>
          <li
            tabIndex="0"
            className="listItem"
            onClick={() => {
              isLoggedIn(false);
            }}
          >
            Logout
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;

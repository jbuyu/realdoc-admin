import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import "./topbar.css";

function Header() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    history.push("/");
  };

  return (
    <header className="header">
      <div className="topLeft">
        <img className="logo" src="./logo.png" alt="app_logo" />
      </div>
      <ul>
        {user ? (
          <>
            <p>
              Welcome <span className="username">{user.name}</span>
            </p>
            <li>
              <button className="btn" onClick={onLogout}>
                <FaSignOutAlt /> Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to="/register">
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default Header;

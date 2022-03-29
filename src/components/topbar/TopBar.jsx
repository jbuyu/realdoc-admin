import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";
import "./topbar.css";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <header className="header">
      <div className="topLeft">
        <img height={64} className="logo" src="./logo1.svg" alt="app_logo" />
        <div className="admin-header">
          Star Admin
        </div>
      </div>
      <div>
        <a href="https://realdoc.vercel.app/" target="_blank" rel="noopener noreferrer">
          <img className="logo" height={50} src="./client.png" alt="" />
        </a>
      </div>
      <ul>
        {user ? (
          <>
            <div className="welcome-text">
              Welcome <span className="username">{user.name}</span>
            </div>
            <li>
              <button className="btn" onClick={onLogout}>
                <FaSignOutAlt /> Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/">
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

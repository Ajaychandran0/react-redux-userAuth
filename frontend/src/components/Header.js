import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";


function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { admin } = useSelector(state => state.admin)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }
  const userProf = () => {

  }
  let name = user? user.name.charAt(0).toUpperCase() + user.name.slice(1): ''

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" onClick={() => console.log('hey in hey')}> My App </Link>
      </div>
      <ul>
        {user ? (
          <>
            <li >
              <Link to="/user" className="link">
                <FaUser /> {name}
              </Link>
            </li>
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
              <Link to="/signup">
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

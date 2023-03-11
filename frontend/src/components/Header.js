import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import AdminHeader from "./AdminHeader";


function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const {admin} = useSelector(state => state.admin)

  const onLogout = ()=>{
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  if(admin && ! user){
    return <AdminHeader/>
  }

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" onClick={()=>console.log('hey in hey')}> My App </Link>
      </div>
      <ul>
        {user ? (
          <li>
            <button className="btn" onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
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

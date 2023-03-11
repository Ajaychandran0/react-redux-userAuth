import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/admin/adminSlice";

function AdminHeader() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
//   const { user } = useSelector((state) => state.auth);
  const { admin } = useSelector((state) => state.admin);

  const onAdminLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/admin");
  };
  return (
    <div>
      <header className="header">
        <div className="logo">
          <Link to="/admin"> <h2> Admin Dashboard </h2> </Link>
        </div>
        <h4>Welcome {admin && admin.email.split('@')[0]}</h4>

        <ul>
          {admin ? (
            <li>
              <button className="btn" onClick={onAdminLogout}>
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
            </>
          )}
        </ul>
      </header>
    </div>
  );
}

export default AdminHeader;

import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/admin/adminSlice";

function AdminHeader() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
//   const { user } = useSelector((state) => state.auth);
  const { admin } = useSelector((state) => state.admin);
  let name = admin? admin.email.charAt(0).toUpperCase() + admin.email.slice(1): ''


  const onAdminLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/admin");
  };
  return (
    <div>
      <header className="header">
        <div className="logo">
          <Link to="/admin" className="nodec"> <h2> Admin Dashboard </h2> </Link>
        </div>
        {admin?<h4>Welcome {name.split('@')[0]}</h4>:''}

        <ul>
          {admin ? (
            <li>
              <button className="btn" onClick={onAdminLogout}>
                <FaSignOutAlt /> Logout
              </button>
            </li>
          ) : ''}
        </ul>
      </header>
    </div>
  );
}

export default AdminHeader;

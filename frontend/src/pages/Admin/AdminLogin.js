import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../../features/admin/adminSlice";
import Spinner from "../../components/Spinner";
import AdminLayout from "../../components/AdminLayout";

function AdminLogin() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { email, password } = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { admin, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.admin
    );

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }
        if (isSuccess || admin) {
            navigate("/admin");
        }

        dispatch(reset());
    }, [admin, isError, isSuccess, message, navigate, dispatch]);


    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    };

    const onSubmit = (e) => {
        e.preventDefault()
        const adminData = {
            email,
            password
        }
        dispatch(login(adminData))
    }

    if (isLoading) {
        return <Spinner />
    }

    return (
        <AdminLayout title='Admin login'>
             <section className="heading">
                <h1>
                    <FaSignInAlt /> Admin Login
                </h1>
                <p>Login to your account</p>
            </section>

            <section id='admin-form' className="form">
                <form onSubmit={onSubmit}>

                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={email}
                            placeholder="Enter your email"
                            onChange={onChange}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={password}
                            placeholder="Enter password"
                            onChange={onChange}
                        />
                    </div>

                    <div className="form-group">
                        <button type="submit" className="button button-block">
                            Submit
                        </button>
                    </div>
                </form>
            </section>
        </AdminLayout>
    );
}

export default AdminLogin

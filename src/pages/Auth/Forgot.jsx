import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner";
import { login, reset } from "../../features/auth/authSlice";
import "./auth.css";

function Forgot() {
    const [formData, setFormData] = useState({
        email: "",
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const { email, oldPassword, newPassword, confirmPassword } = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }

        if (isSuccess || user) {
            navigate("/login");
        }

        dispatch(reset());
    }, [user, isError, isSuccess, message, navigate, dispatch]);

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (newPassword === confirmPassword) {

            const userData = {
                email,
                oldPassword,
                newPassword
            };
            console.log(userData)
            // dispatch(login(userData));
        } else {
            //make
            toast.error("Passwords don't match")
        }
    };

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <div className="auth-container">
            <section className="heading">
                <h1 className="header-row">
                    <img src="/login.png" alt="login" />
                    Forgot Password
                </h1>
            </section>
            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            required
                            value={email}
                            placeholder="Enter your email"
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            required
                            type="password"
                            className="form-control"
                            id="oldPassword"
                            name="oldPassword"
                            value={oldPassword}
                            placeholder="Old password"
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            required
                            type="password"
                            className="form-control"
                            id="newPassword"
                            name="newPassword"
                            value={newPassword}
                            placeholder="New password"
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            required
                            type="password"
                            className="form-control"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={confirmPassword}
                            placeholder="Confirm password"
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-block">
                            Submit
                        </button>
                    </div>
                    <div className="sign-up-link-container">
                        Don't have an account?
                        <span>
                            <Link to="/register">
                                Sign Up
                            </Link>
                        </span>
                    </div>
                </form>
            </section>
            <Toaster position="bottom-right" reverseOrder={false} />
        </div>
    );
}

export default Forgot;

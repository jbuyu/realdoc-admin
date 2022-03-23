import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import Spinner from "../../components/Spinner";
import { register, reset } from "../../features/auth/authSlice";
import toast, { Toaster } from "react-hot-toast";

function Register() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password2: "",
  });

  const { firstname, lastname, email, password, password2 } = formData;

  const history = useHistory();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      history.push("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, history, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      console.log("no match");
      toast.error("Passwords don't match!", {
        // style: {
        //   border: "1px solid #713200",
        //   padding: "16px",
        //   color: "#f",
        //   backgroundColor: "#FF0",
        // },
        // iconTheme: {
        //   primary: "#fff",
        //   secondary: "#FFFAEE",
        // },
      });
    } else {
      const userData = {
        firstname,
        lastname,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="auth-container">
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="firstname"
              name="firstname"
              value={firstname}
              placeholder="Enter your first name"
              required
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="lastname"
              name="lastname"
              value={lastname}
              required
              placeholder="Enter your last name"
              onChange={onChange}
            />
          </div>
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
              required
              value={password}
              placeholder="Enter password"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password2"
              name="password2"
              required
              value={password2}
              placeholder="Confirm password"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
}

export default Register;

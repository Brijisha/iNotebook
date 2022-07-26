import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import ButtonDark from "./ButtonDark";
const Signup = (props) => {
  const host = "http://localhost:3001";
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    // API call
    //Destructuring
    const { name, email, password } = credentials;
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const json = await response.json();
    if (json.success) {
      //Save the Auth token and redirect
      localStorage.setItem("token", json.authToken);
      props.showAlert("Acount Created Successfully", "success");
      navigate("/");
    } else {
      props.showAlert("Invalid Credentials", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h3 className="text-center fw-bold mt-3">
        Signup to continue to iNotebook
      </h3>
      <div className="container-xxxl mt-3 login py-5 px-2 m-1 fs-5">
        <form onSubmit={handleSubmit} className="w-100 h-100">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className=""
              id="name"
              name="name"
              value={credentials.name}
              onChange={onChange}
              required
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className=""
              id="email"
              name="email"
              value={credentials.email}
              onChange={onChange}
              required
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={onChange}
              className=""
              id="password"
              minLength={6}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              name="cpassword"
              value={credentials.cpassword}
              onChange={onChange}
              className=""
              id="cpassword"
            />
          </div>

          <ButtonDark text="SIGNUP" type="submit" className=" my-3 py-2 " />
          <br></br>
          <Link
            className="btn btn-primary fw-bold mybutton3 w-25 py-2 mx-5"
            to="/login"
            type="submit"
          >
            Login from here
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;

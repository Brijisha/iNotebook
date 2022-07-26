import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonDark from "./ButtonDark";

const Login = (props) => {
  const host = "http://localhost:3001";
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    // API call
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //Save the Auth token and redirect
      localStorage.setItem("token", json.authToken);
      props.showAlert("Loggedin Successfully", "success");
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
        Login to continue to iNotebook
      </h3>
      <div className="container-xxxl mt-3 login py-5 px-2 m-1 fs-5">
        <form onSubmit={handleSubmit} className="w-100 h-100">
          <div className="my-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="m-1"
              id="email"
              name="email"
              value={credentials.email}
              onChange={onChange}
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="my-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={onChange}
              className="m-1"
              id="password"
            />
          </div>
          <ButtonDark text="SUBMIT" type="submit" className=" my-3 py-2 " />
        </form>
      </div>
    </div>
  );
};

export default Login;

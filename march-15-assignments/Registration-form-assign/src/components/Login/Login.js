import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GrFacebook } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import "./Login.css";

const Login = () => {
  const [isOpen, setIsOpen] = useState(true);
  const passwordType = isOpen ? "password" : "text";
  const eyeChangeHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="login">
      <form>
        <div>
          <h2 className="main0">Welcome!</h2>
          <p className="main1">login your account</p>
        </div>
        {/* Email input */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example1">
            Email
          </label>
          <input type="email" id="form2Example1" className="form-control" />
        </div>
        {/* Password input */}
        <div className="form-outline mb-4 icon-div">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input type={passwordType} id="password" className="form-control" />
          <span className="icon" onClick={eyeChangeHandler}>
            {isOpen ? <AiFillEye /> : <AiFillEyeInvisible />}
          </span>
        </div>
        {/* 2 column grid layout for inline styling */}
        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            {/* Checkbox */}
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue
                defaultChecked
              />
              <label className="form-check-label" htmlFor="form2Example31">
                {" "}
                Remember me{" "}
              </label>
            </div>
          </div>
          <div className="col">
            {/* Simple link */}
            <a href="#!">Forgot password?</a>
          </div>
        </div>
        {/* Submit button */}
        <button type="button" className="btn btn-primary mb-4 w-100">
          Sign in
        </button>
        <div className="orsection">
          <div className="line"></div>
          <p>or</p>
          <div className="line"></div>
        </div>
        <div className="icons">
          <div>
            <button className="btns">
              <GrFacebook /> Continue with Facebook
            </button>
          </div>
          <div>
            <button className="btns">
              <FcGoogle /> Continue with Google
            </button>
          </div>
        </div>
        {/* Register buttons */}
        <div className="text-center">
          <p>
            Don't have an Account? <Link to={"/register"}>Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;

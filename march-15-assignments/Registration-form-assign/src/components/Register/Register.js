import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { GrFacebook } from "react-icons/gr";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [isOpen, setIsOpen] = useState(true);
  const passwordType = isOpen ? "password" : "text";
  const eyeChangeHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="register">
      <>
        <form>
          <div>
            <h2 className="main0">Welcome</h2>
            <p className="main1">Register your account</p>
          </div>
          {/* FirstName input */}
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="firstname">
              First name
            </label>
            <input type="text" id="email" className="form-control" />
          </div>
          {/* LastName input */}
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="lastname">
              Last name
            </label>
            <input type="text" id="form2Example1" className="form-control" />
          </div>
          {/* Email input */}
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="lastname">
              Email
            </label>
            <input type="text" id="email" className="form-control" />
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

          <button type="button" className="btn btn-primary mb-4 w-100">
            Sign Up
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
              Already Signed Up? <Link to={"/login"}>Login</Link>
            </p>
          </div>
        </form>
      </>
    </div>
  );
};

export default Register;

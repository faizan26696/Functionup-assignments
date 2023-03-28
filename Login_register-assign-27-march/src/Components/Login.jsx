import React from "react";
import style from "./Login.module.css";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className={style.mainLoginPage}>
      <img
        src="https://png.pngtree.com/png-clipart/20210915/ourlarge/pngtree-user-avatar-login-interface-abstract-blue-icon-png-image_3917504.jpg"
        alt=""
      />
      <div className={style.LoginContent}>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <div className={style.LogInBtn}>
          <div>
            <p>Dont have an account?</p>
            {/* <a href="/">Register</a> */}
            <Link to="/register">Register</Link>
          </div>
          <div className={style.logBtn}>
            <button onClick={() => navigate("/about")}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

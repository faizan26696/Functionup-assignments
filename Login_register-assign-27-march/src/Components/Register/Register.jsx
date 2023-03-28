import React from "react";
import style from "./Register.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className={style.mainRegisterPage}>
      <img
        src="https://png.pngtree.com/png-clipart/20210915/ourlarge/pngtree-user-avatar-login-interface-abstract-blue-icon-png-image_3917504.jpg"
        alt=""
      />
      <div className={style.RegisterContent}>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <div className={style.RegisterBtn}>
          <button onClick={() => navigate("/")}>Register</button>
        </div>
      </div>
    </div>
  );
};

export default Login;

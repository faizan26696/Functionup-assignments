import React from "react";
import style from "./About.module.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={style.AboutPage}>
      <div className={style.Navbar}>
        <div className={style.NavLinks}>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <img
            src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
            alt=""
          />
        </div>
      </div>

      {/* -----------------------------------About-Content------------------------------- */}
      <div className={style.AboutContent}>
        <div className={style.head}>
          <h1>About Us</h1>
          <img
            src="https://images.unsplash.com/photo-1544168190-79c17527004f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTExfHxzdHVkZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <h4>Age:25</h4>
          <h4>Location:india</h4>
        </div>

        <div className={style.SkillsSection}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
            minus cum hic nihil eaque praesentium incidunt reprehenderit! Sint
            at. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deserunt ipsam velit totam eius nesciunt natus enim consectetur
            officia ipsum, magnam praesentium fugit, quis recusandae optio qui
            quaerat hic asperiores sed.
          </p>
          <div className={style.EduSection}>
            <div>
              <h3>Skills</h3>
              <ul>
                <li>JavaScript</li>
                <li>React js</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div>
              <h3>Skills</h3>
              <ul>
                <li>JavaScript</li>
                <li>React js</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div>
              <h3>Skills</h3>
              <ul>
                <li>JavaScript</li>
                <li>React js</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

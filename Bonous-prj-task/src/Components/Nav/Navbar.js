import { Link } from "react-router-dom";
import styles from './Navbar.module.css'
import React from "react";

const Navbar = () => {
  return (
    <div className={styles.NavContainer}>
      <div className={styles.navLinks}>
        <Link className={styles.Link} to="/">Home</Link>
        <Link className={styles.Link} to="/task">Task</Link>
        <Link className={styles.Link} to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;

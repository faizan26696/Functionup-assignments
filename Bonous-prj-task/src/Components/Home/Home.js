import React, { useEffect, useState } from "react";
// import userContext from "../../Context/UserDetails/userContext.js";
import styles from "./Home.module.css";

const Home = () => {
  // const { userData } = useContext(userContext);
  // let userData = {};
  const [userData, setUserData] = useState({});
  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("Data")) || {});
  }, [userData]);

  const clearHandler = () => {
    localStorage.removeItem("Data");
  };
  return (
    <>
      <div className={styles.HomeContent}>
        <div>
          <h1>Welcome {userData.name}</h1>
        </div>
        <button onClick={clearHandler}>Clear</button>
      </div>
    </>
  );
};

export default Home;

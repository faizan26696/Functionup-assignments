import React, { useContext } from "react";
import styles from "./Contact.module.css";
import userContext from "../../Context/UserDetails/userContext";

const Contact = () => {
  const { userData, setEmail, setName, setNumber } = useContext(userContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.name.length > 3 && userData.email.includes("@")) {
      localStorage.setItem(
        "Data",
        JSON.stringify({
          name: userData.name,
          email: userData.email,
          phone: userData.phone,
        })
      );
    } else {
      alert("Please enter a valid details");
    }
    setNumber("");
    setEmail("");
    setName("");
  };

  const HandleName = (e) => {
    setName(e.target.value);
  };

  const HandleEmail = (e) => {
    setEmail(e.target.value);
  };
  const HandleNumber = (e) => {
    setNumber(e.target.value);
  };

  return (
    <div className={styles.ContactContainer}>
      <div>
        <form onSubmit={handleSubmit} className={styles.formContent}>
          <input
            type="text"
            value={userData.name}
            onChange={HandleName}
            placeholder="enter your name"
            required
          />
          <br />
          <input
            type="email"
            value={userData.email}
            onChange={HandleEmail}
            placeholder="enter your email"
            required
          />
          <br />
          <input
            type="number"
            value={userData.phone}
            onChange={HandleNumber}
            placeholder="enter your phone number"
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

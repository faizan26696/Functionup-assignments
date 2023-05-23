import React, { useState } from "react";
import userContext from "./userContext";

const UserState = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number,setNumber]=useState(null)

  const userData = {
    name: name,
    email: email,
    number:number
  };

  return (
    <userContext.Provider value={{userData,setEmail,setName,setNumber}}>
      {props.children}
    </userContext.Provider>
  );
};

export default UserState;

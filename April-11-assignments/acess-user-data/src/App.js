import First from "./First";
import Second from "./Second";
import Third from "./Third";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [tableData, setTableData] = useState([]);
  return (
    <div className="App">
      <div className="first-row">
        <div style={{ width: "50%", border: "1px solid black" }}>
          <First
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            age={age}
            setAge={setAge}
          />
        </div>
        <div style={{ width: "50%", border: "1px solid black" }}>
          <Second
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            age={age}
            setAge={setAge}
            tableData={tableData}
            setTableData={setTableData}
          />
        </div>
      </div>
      <div className="second-row">
        <Third
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          age={age}
          setAge={setAge}
          tableData={tableData}
          setTableData={setTableData}
        />
      </div>
    </div>
  );
}

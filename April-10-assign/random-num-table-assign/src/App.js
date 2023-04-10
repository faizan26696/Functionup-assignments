import './index.css';
import React, { useState } from "react";

export default function App() {
  const [number, setNumber] = useState(1);
  const [tableData, setTableData] = useState([]);
  const handleGenerateTable = () => {
    setNumber(Math.floor(Math.random() * 100) + 1);
    let newArr = [];
    for (let i = 1; i <= 10; i++) {
      newArr.push(`${number} x ${i} = ${number * i}`);
    }
    setTableData(newArr);
  };
  return (
    <div className="App">
      <button onClick={handleGenerateTable}>Generate Table</button>
      <table>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

import React, { useState } from "react";

export default function App() {
  const [logs, setLogs] = useState([]);
  const handleMouseOver = () => {
    setLogs([
      ...logs,
      { time: new Date().toLocaleString(), name: "Mouse Over" },
    ]);
  };
  const handleMousseOut = () => {
    setLogs([
      ...logs,
      { time: new Date().toLocaleString(), name: "Mouse Out" },
    ]);
  };
  return (
    <div className="App">
      <h1>Mouse Evenets Logs</h1>
      <h2 onMouseOver={handleMouseOver} onMouseOut={handleMousseOut}>
        Hover over me
      </h2>
      <div>
        <table>
          <thead>
            <tr>
              <th>Time</th>

              <th>Event Log</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => (
              <tr key={index}>
                <td>{log.time}</td>

                <td>{log.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

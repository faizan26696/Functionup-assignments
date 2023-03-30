import "./App.css";
// import Navbar from "./Conponents/Navbar/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Conponents/Login";
import About from "./Conponents/About";
import Register from "./Conponents/Register";
import Home from "./Conponents/Home";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

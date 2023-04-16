import "./style.css";
import { Home, Contact } from "./Contact";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Swith between contact and Home page</h1>
        <Link to="/home">
          <h2>Home</h2>
        </Link>
        <Link to="/contact">
          <h2>Contact</h2>
        </Link>
      </div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

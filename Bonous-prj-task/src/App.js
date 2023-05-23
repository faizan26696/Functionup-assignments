import Task from "./Components/Task/Task";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Nav/Navbar";
import UserState from "./Context/UserDetails/UserState";

function App() {
  return (
    <div className="App">
      <UserState>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/task" element={<Task />} />
        </Routes>
      </UserState>
    </div>
  );
}

export default App;

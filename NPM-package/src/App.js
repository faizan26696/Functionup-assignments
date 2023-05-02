import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddFavButton from "./component/AddFavBtn";
import Search from "./component/Search";


export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Welcome to Fav NPM packages</h1>
        <Routes>
          <Route path="/" element={<AddFavButton />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


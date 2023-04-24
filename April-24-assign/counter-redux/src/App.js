import logo from './logo.svg';
import './App.css';

// import logo from "./logo.svg";
import "./App.css";
import Counter from "./Components/Counter";
import { Provider } from "react-redux";
import { store } from ".";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
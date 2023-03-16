import "./styles.css";
import { useState } from "react";
export default function App() {
  const [counter, setCounter] = useState(0);
  const imagesLinks = [
    "image",
    "https://images.unsplash.com/photo-1615744455875-7ad33653e8c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1608463026422-8f43ab4ebac0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1619650277752-9b853abf815b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
  ];

  const imageChangeHandler = () => {
    if (counter === imagesLinks.length - 1) {
      setCounter(1);
    } else {
      setCounter((prev) => prev + 1);
    }
  };

  return (
    <div className="App">
      <div className="myDiv">
        {counter === 0 && "image"}
        {counter !== 0 && (
          <img
            className="imgDiv"
            src={imagesLinks[counter]}
            alt={imagesLinks[counter]}
          />
        )}
      </div>
      <div className="myDiv">
        <button onClick={imageChangeHandler} className="changeBtn">
          Change Pic
        </button>
      </div>
    </div>
  );
}

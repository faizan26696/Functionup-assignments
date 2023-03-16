import "./styles.css";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");

  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    if (inputValue.length <= 100) {
      setValue(inputValue);
    }
  };
  return (
    <div className="App">
      <h2>Textarea Field with 100 Character limit</h2>
      <textarea
        value={value}
        onChange={handleInputChange}
        maxLength={100}
        placeholder="(max. 100 characters)"
      />
      <p>
        Characters left in Field: {100 - value.length}/{100}
      </p>
    </div>
  );
}

import "./App.css";
import React, { useState } from "react";

export default function App() {
  const [items, setItems] = useState([{ product: "", quantity: "" }]);
  const [customerName, setCustomerName] = useState("");
  const [date, setDate] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);

  const handleAddItem = () => {
    setItems([...items, { product: "", quantity: "" }]);
  };

  const handleProductChange = (index, value) => {
    const updatedItems = [...items];
    updatedItems[index].product = value;
    setItems(updatedItems);
  };

  const handleQuantityChange = (index, value) => {
    const updatedItems = [...items];
    updatedItems[index].quantity = value;
    setItems(updatedItems);
  };

  const calculateTotalAmount = () => {
    return items.reduce((total, item) => {
      const price = getPriceByProduct(item.product);
      const quantity = Number(item.quantity);
      return total + price * quantity;
    }, 0);
  };

  const getPriceByProduct = (product) => {
    switch (product) {
      case "sugar":
        return 10;
      case "coffee":
        return 20;
      case "milk":
        return 15;
      case "tea":
        return 8;
      default:
        return 0;
    }
  };

  const formatDate = (date) => {
    const options = {
      day: "numeric",
      month: "short",
      year: "numeric",
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  const handleCreateBill = () => {
    const date = new Date();
    const formattedDate = formatDate(date);
    const totalAmount = calculateTotalAmount();
    setDate(formattedDate);
    setTotalAmount(totalAmount);
  };

  return (
    <div className="App">
      <div className="main-Container">
        <div>
          <h1>Billing Form</h1>
          <label>Customer Name </label>{" "}
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
          <br /> <br />
          <hr />
          <br />
          {items.map((item, index) => (
            <div className="item-content" key={index}>
              <label htmlFor={`product-${index}`}>
                Choose Product:
                <select
                  name={`product-${index}`}
                  id={`product-${index}`}
                  value={item.product}
                  onChange={(e) => handleProductChange(index, e.target.value)}
                >
                  <option value="0">Select</option>
                  <option value="sugar">Sugar</option>

                  <option value="coffee">Coffee</option>
                  <option value="milk">Milk</option>
                  <option value="tea">Tea</option>
                </select>
              </label>
              <label>
                select quantity
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(index, e.target.value)}
                />
              </label>
              <br />
              {index === items.length - 1 && (
                <button onClick={handleAddItem}>Add more item</button>
              )}
            </div>
          ))}
        </div>
        <hr />
        <hr />
        <button onClick={handleCreateBill}>Create Bill</button>
        {date && (
          <div>
            <h2>Bill Details</h2>
            <h3>Customer Name: {customerName}</h3>
            <p>Date: {date}</p>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total Price</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index}>
                    <td>{item.product}</td>
                    <td>{item.quantity}</td>
                    <td>{getPriceByProduct(item.product)}</td>
                    <td>{getPriceByProduct(item.product) * item.quantity}</td>
                  </tr>
                ))}
                <tr>
                  <td colSpan="3">Total Amount</td>
                  <td>{totalAmount}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

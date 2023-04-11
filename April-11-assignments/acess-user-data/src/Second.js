import "./thirdstyle.css";

const Second = ({
  name,
  email,
  age,
  setName,
  setEmail,
  setAge,
  tableData,
  setTableData,
}) => {
  const btnHandler = () => {
    setTableData([...tableData, { name: name, email: email, age: age }]);
    setName("");
    setEmail("");
    setAge("");
  };
  return (
    <div className="section-content">
      <h2>Name: {name}</h2>
      <h2>Email: {email}</h2>
      <h2>Age: {age}</h2>

      <button onClick={btnHandler}>Add to Table</button>
    </div>
  );
};
export default Second;

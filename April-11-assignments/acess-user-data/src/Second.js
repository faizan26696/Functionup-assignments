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
  currObjId,
}) => {
  const btnHandler = (id) => {
    const existing = tableData.findIndex((item) => item.id === id);
    if (existing > -1) {
      const updatedData = [...tableData];
      updatedData[existing] = {
        id: id,
        name: name,
        email: email,
        age: age,
      };
      setTableData(updatedData);
    } else {
      const newData = [
        ...tableData,
        {
          id: Math.floor(Date.now() + Math.random()),
          name: name,
          email: email,
          age: age,
        },
      ];
      name.length > 0 &&
        email.length > 0 &&
        age.length > 0 &&
        setTableData(newData);
    }

    setName("");
    setEmail("");
    setAge("");
  };
  return (
    <div className="section-content">
      <h2>Name: {name}</h2>
      <h2>Email: {email}</h2>
      <h2>Age: {age}</h2>

      <button onClick={() => btnHandler(currObjId)}>Add to Table</button>
    </div>
  );
};
export default Second;

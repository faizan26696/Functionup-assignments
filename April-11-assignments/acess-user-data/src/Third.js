import "./thirdstyle.css";

const Third = ({
  tableData,
  setTableData,
  setName,
  setEmail,
  setAge,
  setCurrObjId,
}) => {
  const DeleteData = (id) => {
    setTableData(tableData.filter((data) => data.id !== id));
  };

  const updateHandler = (id) => {
    const post = tableData.find((item) => item.id === id);
    setName(post.name);
    setEmail(post.email);
    setAge(post.age);
    setCurrObjId(id);
  };
  return (
    <div className="GetData-container">
      <table>
        <thead>
          <tr className="main-Head">
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data) => (
            <tr className="body-data">
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.age}</td>
              <td>
                <button id="btn" onClick={() => DeleteData(data.id)}>
                  Delete
                </button>
              </td>
              <td>
                <button id="btn" onClick={() => updateHandler(data.id)}>
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Third;

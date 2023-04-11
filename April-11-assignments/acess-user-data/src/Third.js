import "./thirdstyle.css";

const Third = ({ name, email, age, tableData, id }) => {
  return (
    <div className="GetData-container">
      <table>
        <thead>
          <tr className="main-Head">
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data) => (
            <tr className="body-data">
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Third;

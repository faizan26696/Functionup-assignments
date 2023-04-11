import "./thirdstyle.css";

const First = ({ name, setName, email, setEmail, age, setAge }) => {
  return (
    <div className="input-field">
      Name:
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />{" "}
      <br />
      Email:
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />{" "}
      <br /> age:{" "}
      <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
      <br /> <br />
    </div>
  );
};
export default First;

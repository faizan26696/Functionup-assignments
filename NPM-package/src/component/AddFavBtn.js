import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./comp.css";

const AddFavButton = () => {
  const navigate = useNavigate();
  const [favs, setFavs] = useState([]);
  const [editIndex, setEditIndex] = useState(-1); // -1 indicates that no edit form is currently displayed
  const [newReason, setNewReason] = useState("");

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem("Favourites"));
    if (storedFavs) {
      setFavs(storedFavs);
    }
  }, []);

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const newFavs = favs.filter((_, i) => i !== index);
    localStorage.setItem("Favourites", JSON.stringify(newFavs));
    setFavs(newFavs);
  };

  const handleSave = () => {
    if (newReason === "") {
      return; // don't save an empty reason
    }
    const newFavs = [...favs];
    const editedFav = { ...newFavs[editIndex], reason: newReason };
    newFavs[editIndex] = editedFav;
    localStorage.setItem("Favourites", JSON.stringify(newFavs));
    setFavs(newFavs);
    setEditIndex(-1); // hide the edit form
    setNewReason(""); // clear the text box
  };

  return (
    <>
      {!favs || favs.length === 0 ? (
        <div className="container">
          <p>You don't have any favs yet. Please add.</p>
          <button className='btn' onClick={() => navigate("/search")}>Add</button>
        </div>
      ) : (
        <div className="list">
          {favs.map((item, index) => (
            <div key={index}>
              <p>Package Name : {item.package}</p>
              {editIndex === index ? (
                <>
                  <input
                    className="favInput"
                    type="text"
                    value={newReason}
                    onChange={(e) => setNewReason(e.target.value)}
                  />
                  <button className="btn" onClick={handleSave}>
                    Save
                  </button>
                  <button className="btn" onClick={() => setEditIndex(-1)}>
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <p>Reason: {item.reason}</p>
                  <button className="btn" onClick={() => handleEdit(index)}>
                    Edit
                  </button>
                  <button className="btn" onClick={() => handleDelete(index)}>
                    Delete
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default AddFavButton;

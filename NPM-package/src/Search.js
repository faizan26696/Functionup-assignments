import React, { useState } from "react";
import { Link } from "react-router-dom";
// import useNavigate from "react-router-dom";
import './comp.css';

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if(query === '') return alert('Please Enter Something!!')
    const response = await fetch(`https://api.npms.io/v2/search?q=${query}`);
    const data = await response.json();
    setResults(data.results);
  };

  const handleAddFav = () => {
    const selectedPackage = document.querySelector(
      'input[name="package"]:checked'
    
    );
    const reason = document.querySelector("textarea").value;

  
    if (!selectedPackage) {
      alert("Please select a package to add to favorites");
      return;
    }

    const packageName = selectedPackage.value;

  
    const favourites = JSON.parse(localStorage.getItem("Favourites")) || [];


    const isDuplicate = favourites.some((fav) => fav.package === packageName);
    if (isDuplicate) {
      alert("This package is already in favorites");
      return;
    }

  
    favourites.push({ package: packageName, reason });


    localStorage.setItem("Favourites", JSON.stringify(favourites));

    document.querySelector("textarea").value = "";
  };

  return (
    <div  className='searcContainer'>
      <input className='searchInput'
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className='btn' onClick={handleSearch}>Search</button>

      <div>
        {results.map((result) => (
          <div key={result.package.name} style={{display:'flex'}}>
            <input type="radio" name="package" value={result.package.name} />
            <h3>{result.package.name}</h3>
            <p>{result.package.description}</p>
            <p>Downloads: {result.package.version.downloads}</p>
          </div>
        ))}
      </div>
      <h2>Why is this fav?</h2>
      <textarea className='textArea' placeholder="Why is this your fav?" />
      <button className='btn' onClick={handleAddFav}>Add Fav</button>
      <Link to="/" className='btn'>Go to Home</Link>
    </div>
  );
};

export default Search;

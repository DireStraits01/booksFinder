import React from 'react';
import './inputStyle.css';
function SearchBar() {
  return (
    <>
      <div className="searchBar-container">
        <input
          type="text"
          className="searchBar-input"
          placeholder="Search..."
        />
        <span className="searchBar-icon">🔍</span>
      </div>
    </>
  );
}

export default SearchBar;

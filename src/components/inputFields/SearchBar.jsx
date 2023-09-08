import React, { useState } from 'react';
import './inputStyle.css';
import BookStore from '../../store/BookStore';
function SearchBar() {
  const [bookRequest, setBookRequest] = useState('');

  return (
    <>
      <div className="searchBar-container">
        <input
          type="text"
          className="searchBar-input"
          placeholder="Search..."
          value={bookRequest}
          onChange={(e) => {
            setBookRequest(e.target.value);
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              BookStore.fetchBooks(bookRequest);
            }
          }}
        />
        <input
          type="submit"
          name="submit"
          onClick={() => BookStore.fetchBooks(bookRequest)}
        />
      </div>
    </>
  );
}

export default SearchBar;

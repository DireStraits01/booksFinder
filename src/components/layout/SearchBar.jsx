import React, { useState } from 'react';
import './LayoutStyle.css';
import BookStore from '../../store/BookStore';
function SearchBar() {
  const [bookRequest, setBookRequest] = useState('');

  return (
    <>
      <div className="searchBar-container">
        <input
          type="text"
          name="searchInput"
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
          onClick={() => {
            BookStore.fetchBooks(bookRequest);
            BookStore.clearQuery();
          }}
        />
      </div>
    </>
  );
}

export default SearchBar;

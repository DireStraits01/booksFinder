import React, { useEffect, useState } from 'react';
import BookStore from '../../store/BookStore';
function Sorting() {
  const [sortBy, setSortBy] = useState('relevance');

  useEffect(() => {
    BookStore.setSortOrderBy(sortBy);
    if (BookStore.lastSearchQuery) {
      BookStore.page = 0; // сброс пагинации
      BookStore.fetchBooks(BookStore.lastSearchQuery);
    }
  }, [sortBy]);

  console.log(BookStore.sortOrderBy);
  return (
    <>
      <label className="label-sorting" htmlFor="sorting">
        Sorting by:&nbsp;
      </label>
      <select
        id="sorting"
        className="select-sorting"
        onChange={(event) => {
          setSortBy(event.target.value);
        }}
        value={sortBy}
      >
        <option value="relevance">relevance</option>
        <option value="newest">newest</option>
      </select>
    </>
  );
}

export default Sorting;

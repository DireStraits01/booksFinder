import React, { useEffect, useState } from 'react';
import BookStore from '../../store/BookStore';
function Sorting() {
  const [sortBy, setSortBy] = useState('relevance');

  useEffect(() => {
    BookStore.setSortOrderBy(sortBy);
    BookStore.fetchBooks();
  }, [sortBy]);

  console.log(BookStore.sortOrderBy);
  return (
    <>
      <label className="label-sorting" htmlFor="sorting">
        Sorting by:&nbsp;
      </label>
      <select
        className="select-sorting"
        id="sorting"
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

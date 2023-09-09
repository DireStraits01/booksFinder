import React, { useEffect, useState } from 'react';
import BookStore from '../../store/BookStore';
function Sorting() {
  const [sortBy, setSortBy] = useState('relevance');

  useEffect(() => {
    BookStore.setSortOrderBy(sortBy);
    if (BookStore.lastSearchQuery) {
      BookStore.page = 0;
      BookStore.fetchBooks(BookStore.lastSearchQuery);
    }
    console.log(
      'last query: ' +
        BookStore.lastSearchQuery +
        ', sort: ' +
        BookStore.sortOrderBy
    );
  }, [sortBy]);

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
          BookStore.clearQuery();
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

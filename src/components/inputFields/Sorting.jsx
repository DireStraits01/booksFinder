import React, { useState } from 'react';
import BookStore from '../../store/BookStore';
function Sorting() {
  const [sortBy, setSortBy] = useState('relevance');
  return (
    <>
      <label className="label-sorting" htmlFor="sorting">
        Sorting by:&nbsp;
      </label>
      <select className="select-sorting" id="sorting">
        <option value="">relevance</option>
        <option value="">newest</option>
      </select>
    </>
  );
}

export default Sorting;

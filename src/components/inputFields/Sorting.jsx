import React from 'react';

function Sorting() {
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

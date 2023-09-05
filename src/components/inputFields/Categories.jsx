import React from 'react';

function Categories() {
  return (
    <div>
      <label className="label-categories" htmlFor="categories">
        Categories: &nbsp;
      </label>
      <select className="select-categories" id="categorie">
        <option value="">all</option>
        <option value="">art</option>
        <option value="">biography</option>
        <option value="">computers</option>
        <option value="">history</option>
        <option value="">medical</option>
        <option value="">poetry</option>
      </select>
    </div>
  );
}

export default Categories;

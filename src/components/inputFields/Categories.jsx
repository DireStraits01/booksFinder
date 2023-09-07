import { useEffect, useState } from 'react';
import BookStore from '../../store/BookStore';
function Categories() {
  const [filterCategory, setFilterCategory] = useState('All');
  useEffect(() => {
    BookStore.selectedCategory(filterCategory);
  }, [filterCategory]);

  return (
    <>
      <label className="label-categories" htmlFor="categories">
        Categories: &nbsp;
      </label>
      <select
        className="select-categories"
        id="categorie"
        onChange={(event) => {
          setFilterCategory(event.target.value);
        }}
        value={filterCategory}
      >
        <option value="All">All</option>
        <option value="Art">Art</option>
        <option value="Biography">Biography</option>
        <option value="Computers">Computers</option>
        <option value="History">History</option>
        <option value="Medical">Medical</option>
        <option value="Poetry">Poetry</option>
      </select>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </>
  );
}

export default Categories;

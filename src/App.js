import './App.css';
import SearchBar from './components/inputFields/SearchBar';
import Categories from './components/inputFields/Categories';
import Sorting from './components/inputFields/Sorting';
import BookList from './components/BookList';
function App() {
  return (
    <div className="App">
      <div className="search-fields-container">
        <div className="navbar">
          <h1 onClick={() => window.location.reload(false)} className="app-H1">
            Search for <span className="title-piece-books">books</span>
          </h1>

          <SearchBar />
          <div className="sort-category">
            <Categories />
            <Sorting />
          </div>
        </div>

        <BookList />
      </div>
    </div>
  );
}

export default App;

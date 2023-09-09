import './App.css';
import SearchBar from './components/layout/SearchBar';
import Categories from './components/layout/Categories';
import Sorting from './components/layout/Sorting';
import BookList from './components/BookList';
function App() {
  return (
    <div className="App">
      <div className="search-fields-container">
        <div className="search-navbar">
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

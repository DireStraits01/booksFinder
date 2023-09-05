import './App.css';
import SearchBar from './components/inputFields/SearchBar';
import Categories from './components/inputFields/Categories';
import Sorting from './components/inputFields/Sorting';
import BookList from './components/BookList';
function App() {
  return (
    <div className="App">
      <div className="search-fields-container">
        <h1 className="app-H1">Search for books</h1>
        <from analyticsion="#">
          <SearchBar />
          <div className="sort-category">
            <Categories />
            <Sorting />
          </div>
        </from>

        <BookList />
      </div>
    </div>
  );
}

export default App;

import './App.css';
import SearchBar from './components/inputFields/SearchBar';
function App() {
  return (
    <div className="App">
      <div className="search-fields-container">
        <h1 className="app-H1">Search for books</h1>
        <SearchBar />
      </div>
    </div>
  );
}

export default App;

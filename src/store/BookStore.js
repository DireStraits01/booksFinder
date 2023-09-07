// stores/BookStore.js
import { makeAutoObservable } from 'mobx';
import { GOOGLE_API } from './env';
class BookStore {
  books = [];
  error = null;
  loading = false;
  category = 'All';
  sortOrderBy = 'relevance';
  lastSearchQuery = '';
  constructor() {
    makeAutoObservable(this);
  }

  selectedCategory(category) {
    this.category = category;
  }
  fetchBooks(query, sortOrderBy = this.sortOrderBy) {
    this.loading = true;
    if (!query || !query.trim()) {
      this.books = [];
      this.loading = false;
      return;
    }
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&orderBy=${sortOrderBy}&key=${GOOGLE_API}`
    )
      .then((response) => response.json())
      .then((data) => {
        this.books = data.items;
        this.loading = false;
      })
      .catch((error) => {
        this.error = error;
        this.loading = false;
      });
    this.lastSearchQuery = query;
  }

  setSortOrderBy(value) {
    this.sortOrderBy = value;
  }
}

const bookStoreInstance = new BookStore();
export default bookStoreInstance;

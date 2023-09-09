// stores/BookStore.js
import { makeAutoObservable, runInAction } from 'mobx';
import { GOOGLE_API } from './env';
class BookStore {
  page = 0;
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
    runInAction(() => {
      this.loading = true;
      this.error = null;
    });
    if (!query || !query.trim()) {
      this.books = [];
      this.loading = false;
      return;
    }
    if (this.lastSearchQuery !== query) {
      this.page = 0;
      this.books = [];
    }
    const startIndex = this.page * 30;

    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&orderBy=${sortOrderBy}&key=${GOOGLE_API}&startIndex=${startIndex}&maxResults=30`
    )
      .then((response) => response.json())
      .then((data) => {
        runInAction(() => {
          //this.books = [...this.books, ...(data.items || [])];
          this.books = data.items || [];
          this.lastSearchQuery = query;
          this.lastSearchQuery = query;
          this.loading = false;
        });
      })
      .catch((error) => {
        runInAction(() => {
          this.error = error;
          this.loading = false;
        });
      });
  }
  loadMoreBooks() {
    this.page += 1;
    this.fetchBooks(this.lastSearchQuery);
  }
  setSortOrderBy(value) {
    this.sortOrderBy = value;
  }
}

const bookStoreInstance = new BookStore();
export default bookStoreInstance;

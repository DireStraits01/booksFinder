// stores/BookStore.js
import { makeAutoObservable } from 'mobx';
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
    this.loading = true;
    if (!query || !query.trim()) {
      this.books = [];
      this.loading = false;
      return;
    }
    const startIndex = this.page * 30;
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&orderBy=${sortOrderBy}&key=${GOOGLE_API}&startIndex=${startIndex}&maxResults=30`
    )
      .then((response) => response.json())
      .then((data) => {
        this.books = [...this.books, ...data.items];
        this.loading = false;
      })
      .catch((error) => {
        this.error = error;
        this.loading = false;
      });
    this.lastSearchQuery = query;
  }
  loadMoreBooks() {
    this.page += 1; // увеличиваем страницу пагинации на 1
    this.fetchBooks(this.lastSearchQuery); // повторно вызываем fetchBooks с последним запросом
  }
  setSortOrderBy(value) {
    this.sortOrderBy = value;
  }
}

const bookStoreInstance = new BookStore();
export default bookStoreInstance;

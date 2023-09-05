// stores/BookStore.js
import { makeAutoObservable } from 'mobx';
import { GOOGLE_API } from './booksApi';
class BookStore {
  books = [];
  error = null;
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  fetchBooks(query) {
    this.loading = true;
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${GOOGLE_API}`
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
  }
}

export default new BookStore();

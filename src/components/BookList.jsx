// components/BookList.js
import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import BookStore from '../store/BookStore';
import BookCard from './BookCard';
import { TfiMoreAlt } from 'react-icons/tfi';
import './List.css';
import CardModal from './ModalWindow/CardModal';

const BookList = observer(() => {
  const [modalShow, setModalShow] = useState(false);
  const [selectedBook, setSlectedBook] = useState(null);

  const handleSelectedBook = (book) => {
    setSlectedBook(book);
    setModalShow(true);
    console.log(book.volumeInfo);
  };
  if (BookStore.loading) {
    return <div>Loading...</div>;
  }

  if (BookStore.error) {
    return <div>Error: {BookStore.error.message}</div>;
  }

  const filteredBooks = BookStore.books.filter((book) => {
    const category = book.volumeInfo.categories || [];

    return (
      BookStore.category === 'All' || category.includes(BookStore.category)
    );
  });

  if (filteredBooks.length === 0) {
    return (
      <div className="empty-string">No books found for selected category.</div>
    );
  }

  return (
    <>
      <div className="book-list-container">
        <p className="books-counter">found {filteredBooks.length} books</p>
        <div className="book-list">
          {filteredBooks.map((book, index) => (
            <div
              onClick={() => handleSelectedBook(book)}
              className="book-card"
              key={index}
            >
              <BookCard book={book} />
            </div>
          ))}
        </div>
        <CardModal
          book={selectedBook}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        <button
          className="load-more-btn"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            BookStore.loadMoreBooks();
          }}
        >
          <TfiMoreAlt />
        </button>
      </div>
    </>
  );
});

export default BookList;

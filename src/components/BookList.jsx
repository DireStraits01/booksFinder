// components/BookList.js
import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import BookStore from '../store/BookStore';
import BookCard from './BookCard';
import { TfiMoreAlt } from 'react-icons/tfi';
import './List.css';
import CardModal from './layout/CardModal';
import { Button } from 'react-bootstrap';
const BookList = observer(() => {
  const [modalShow, setModalShow] = useState(false);
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
            <BookCard key={index} book={book} />
          ))}
        </div>
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

        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>

        <CardModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          style={{ backgroundColor: 'white' }}
        />
      </div>
    </>
  );
});

export default BookList;

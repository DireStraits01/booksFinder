// components/BookList.js
import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import BookStore from '../store/BookStore';

const BookList = observer(() => {
  if (BookStore.loading) {
    return <div>Loading...</div>;
  }

  if (BookStore.error) {
    return <div>Error: {BookStore.error.message}</div>;
  }

  return (
    <div>
      {BookStore.books &&
        BookStore.books.map((book) => (
          <div key={book.id}>
            <h3>{book.volumeInfo.title}</h3>
            {/* Add more book details if needed */}
          </div>
        ))}
    </div>
  );
});

export default BookList;

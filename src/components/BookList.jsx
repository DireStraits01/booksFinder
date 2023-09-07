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
    <>
      {BookStore.books.map((book) => {
        const category = book.volumeInfo.categories || [];
        if (
          BookStore.category === 'All' ||
          category.includes(BookStore.category)
        ) {
          return (
            <div key={book.id}>
              <h3>{book.volumeInfo.title}</h3>
              <p>{book.volumeInfo.categories}</p>
            </div>
          );
        }
        return null; // Return null if the condition does not meet
      })}
    </>
  );
});

export default BookList;

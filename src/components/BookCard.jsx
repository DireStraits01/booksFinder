// components/BookCard.js
import React from 'react';
import './Card.css';
function BookCard({ book }) {
  const { volumeInfo } = book;
  const authors = volumeInfo.authors ? volumeInfo.authors.join(', ') : '';
  const category = volumeInfo.categories ? volumeInfo.categories[0] : '';

  return (
    <div className="book-card">
      <p className="category">{category}</p>

      <img src={volumeInfo.imageLinks?.thumbnail} alt={volumeInfo.title} />

      <div className="book_info">
        <h5 className="title">{volumeInfo.title}</h5>
        <p className="authors">{authors}</p>
      </div>
    </div>
  );
}

export default BookCard;

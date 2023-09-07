// components/BookList.js
import { observer } from 'mobx-react-lite';
import BookStore from '../store/BookStore';

const BookList = observer(() => {
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
    return <div>No books found for selected category.</div>;
  }

  return (
    <>
      {filteredBooks.map((book) => (
        <div key={book.id}>
          <h3>{book.volumeInfo.title}</h3>
          <p>{book.volumeInfo.categories}</p>
        </div>
      ))}
    </>
  );
});

export default BookList;

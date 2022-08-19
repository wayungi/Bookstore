/** @format */
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Form from '../partials/Form';
import Book from '../partials/Book';

const BookList = () => {
  const books = useSelector((state) => state.books);
  // runs on page load
  useEffect(() => {
    fetch(
      'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/aIlaxApD4aX5fUDfNGCE/books',
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
      <Form />
    </div>
  );
};

export default BookList;

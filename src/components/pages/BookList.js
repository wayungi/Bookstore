/** @format */
import { useSelector } from 'react-redux';
import Form from '../partials/Form';
import Book from '../partials/Book';

const BookList = () => {
  const books = useSelector((state) => state.books);
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

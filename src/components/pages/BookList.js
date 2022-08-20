/** @format */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { actionGetBooks } from '../../redux/books/books';
import Form from '../partials/Form';
import Book from '../partials/Book';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionGetBooks());
  }, []);

  return (
    <div>
      <ul>
        {books.map((book) => (
          <li key={book.item_id}>
            <Book book={book} />
          </li>
        ))}
        <Form />
      </ul>
    </div>
  );
};

export default BookList;

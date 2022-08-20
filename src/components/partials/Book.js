/*eslint-disable */


import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { actionRemoveBook } from '../../redux/books/books';

const Book = (props) => {
  const { book } = props;
  const dispatch = useDispatch();
  return (
    <div>
      <p>{book.title}</p>
      <p>{book.author}</p>
      <button type='button' onClick={() => {dispatch(actionRemoveBook(book.item_id))}}>Remove</button>
    </div>
  );
};

Book.defaultProps = {
  title: 'title',
  author: 'author',
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};

export default Book;

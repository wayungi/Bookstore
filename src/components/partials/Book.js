/*eslint-disable */


import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { actionRemoveBook } from '../../redux/books/books';
import styles from './Book.module.css';

const Book = (props) => {
  const { book } = props;
  const dispatch = useDispatch();
  return (
    <div className={styles.book}>
        <div className={styles.left}>
          <h2>Action</h2>
          <p className={styles.title}>{book.title}</p>
          <p className={styles.author}>{book.author}</p>
          <button type='button' onClick={() => {dispatch(actionRemoveBook(book.item_id))}}>Remove</button>
        </div>
        <div className={styles.middle}>
          middle section
        </div>
        <div className={styles.right}>
          right lane
        </div>
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

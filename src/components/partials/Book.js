/*eslint-disable */


import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
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
          <div className={styles.subNav}>
            <Link to="/#" className={styles.comment} >Comment</Link>
            <button type='button' className={styles.remove} onClick={() => {dispatch(actionRemoveBook(book.item_id))}}>Remove</button>
            <Link to="/#"  className={styles.edit}>Edit</Link>
          </div>
        </div>
        <div className={styles.middle}>
          <div className={styles.oval}>
            <img src={require('../../images/slice.png')} alt="progress circle" className={styles.progress}/>
          </div>
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

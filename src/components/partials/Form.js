/** @format */

import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { actionAddBook } from '../../redux/books/books';
import styles from './Form.module.css';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleTitleInput = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorInput = (e) => {
    setAuthor(e.target.value);
  };

  const handleCategoryInput = (e) => {
    setCategory(e.target.value);
  };

  return (
    <form className={styles.form}>
      <div>
        <h1>Add New BooK</h1>
      </div>
      <div className={styles.elements}>
        <div className={styles.title}>
          <input
            type="text"
            required
            id="title"
            placeholder="Book Title"
            value={title}
            name="title"
            onChange={handleTitleInput}
          />
        </div>
        <div className={styles.author}>
          <input
            type="text"
            required
            id="author"
            placeholder="Author"
            value={author}
            name="author"
            onChange={handleAuthorInput}
          />
        </div>
        <div className={styles.category}>
          <input
            type="text"
            required
            id="category"
            placeholder="Category"
            value={category}
            name="category"
            onChange={handleCategoryInput}
          />
        </div>
        <div className={styles.submitBtn}>
          <button
            type="button"
            onClick={() => {
              dispatch(
                actionAddBook({
                  id: uuidv4(),
                  title,
                  author,
                  completed: false,
                  category,
                }),
              );
            }}
          >
            Add Book
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;

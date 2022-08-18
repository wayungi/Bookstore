/** @format */

import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { actionAddBook } from '../../redux/books/books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleTitleInput = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorInput = (e) => {
    setAuthor(e.target.value);
  };
  // setTitle();

  return (
    <form>
      <div>
        <h1>Add New BooK</h1>
      </div>
      <div>
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
      <div>
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
      <div>
        <button
          type="button"
          onClick={() => {
            dispatch(actionAddBook({ id: uuidv4, title, completed: false }));
          }}
        >
          Add Book
        </button>
      </div>
    </form>
  );
};

export default Form;

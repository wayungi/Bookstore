/** @format */

// import { useDispatch } from 'react-redux';
// import { useState } from 'react';
// import { actionAddBook } from '../../redux/books/books';

const Form = () => (
  // const [title, setTitle] = useState('');
  // const dispatch = useDispatch();
  // setTitle();

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
        // value={title}
      />
    </div>
    <div>
      <input type="text" required id="author" placeholder="Author" />
    </div>
    <div>
      <button
        type="button"
        // onClick={() => {
        //   dispatch(actionAddBook({ title }));
        // }}
      >
        Add Book
      </button>
    </div>
  </form>
);

export default Form;

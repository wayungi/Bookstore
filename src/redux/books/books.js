/** @format */

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_BOOKS = 'bookStore/books/FECTH_BOOKS';
const BOOK_FETCH_SUCCESS = 'bookStore/books/BOOK_FETCH_SUCCESS';
const BOOK_FETCH_FAILURE = 'bookStore/books/BOOK_FETCH_FAILURE';

const booksReducer = (
  state = [
    {
      id: 1,
      title: 'Cross roads',
      author: 'Jones',
      completed: false,
    },
    {
      id: 2,
      title: 'Archery',
      author: 'Nyamu',
      completed: true,
    },
    {
      id: 3,
      itle: 'The river between',
      author: 'Francis',
      completed: false,
    },
  ],
  action
) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return [
        // ...state.slice(0, action.payload),
        // ...state.slice(action.payload + 1),
        ...state.filter((book) => book.id !== action.payload),
      ];
    default:
      return state;
  }
};

/*
action has type, and data
*/
const actionAddBook = (bookObj) => {
  const { id, title, author, completed } = bookObj;
  const action = {
    type: ADD_BOOK,
    payload: {
      id,
      title,
      author,
      completed,
    },
  };
  return action;
};

const actionRemoveBook = (id) => {
  const action = { type: REMOVE_BOOK, payload: id };
  return action;
};

const actionFetchBooks = () => (dispatch) => {
  dispatch({ type: FETCH_BOOKS });
  return fetch(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/aIlaxApD4aX5fUDfNGCE/books',
  ).then(
    (books) => dispatch({ type: BOOK_FETCH_SUCCESS, payload: books }),
    (err) => dispatch({ type: BOOK_FETCH_FAILURE, payload: err }),
  );
};

export default booksReducer;
export { actionAddBook, actionRemoveBook, actionFetchBooks };

/** @format */

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.remove();
    default:
      return state;
  }
};

/*
action has type, and data
*/
const actionAddBook = (bookObj) => {
  const { id, title, completed } = bookObj;
  const action = { type: ADD_BOOK, payload: { id, title, completed } };
  return action;
};

const actionRemoveBook = (id) => {
  const action = { type: REMOVE_BOOK, payload: id };
  return action;
};

export default booksReducer;
export { actionAddBook, actionRemoveBook };

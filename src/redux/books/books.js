/** @format */

const ADD_BOOK = 'add book';
const REMOVE_BOOK = 'remove book';

const addBookReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      state.push(action.book);
      break;
    default:
      state;
  }
};

const removeBookReducer = (state = [], action) => {
  switch (action.type) {
    case REMOVE_BOOK:
      state.pop();
      break;
    default:
      state;
  }
};

/*
action has type, and data

*/
const actionAddBook = (bookObj) => {
  const { id, title, completed } = bookObj;
  const action = { type: ADD_BOOK, data: { id, title, completed } };
  return action;
};

const actionRemoveBook = (id) => {
  const action = { type: REMOVE_BOOK, data: id };
  return action;
};

export { actionAddBook, actionRemoveBook, removeBookReducer, addBookReducer };

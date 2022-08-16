/** @format */

const ADD_BOOK = 'add book';
const REMOVE_BOOK = 'remove book';

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      state.push(action.payload);
      break;
    case REMOVE_BOOK:
      state.remove();
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
  const action = { type: ADD_BOOK, payload: { id, title, completed } };
  return action;
};

const actionRemoveBook = (id) => {
  const action = { type: REMOVE_BOOK, payload: id };
  return action;
};

export default reducer;
export { actionAddBook, actionRemoveBook, ADD_BOOK, REMOVE_BOOK };

/** @format */

const ADD_BOOK = 'add_book';
const REMOVE_BOOK = 'remove_book';

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return state.push(action.payload);
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

export default reducer;
export { actionAddBook, actionRemoveBook };

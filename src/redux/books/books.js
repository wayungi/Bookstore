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

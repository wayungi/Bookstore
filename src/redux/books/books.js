/** @format */

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

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
  action,
) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return [
        // ...state.slice(0, action.payload),
        // ...state.slice(action.payload + 1),
        ...state.filter((book) => book.id !== action.payload.id),
      ];
    default:
      return state;
  }
};

/*
action has type, and data
*/
const actionAddBook = (bookObj) => {
  const {
    id,
    title,
    author,
    completed,
  } = bookObj;
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

export default booksReducer;
export { actionAddBook, actionRemoveBook };

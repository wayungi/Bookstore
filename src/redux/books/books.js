/** @format */

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';
// const BOOK_FETCH_SUCCESS = 'bookStore/books/BOOK_FETCH_SUCCESS';
// const BOOK_FETCH_FAILURE = 'bookStore/books/BOOK_FETCH_FAILURE';

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return [...state.filter((book) => book.item_id !== action.payload)];
    case GET_BOOKS:
      return action.payload;
    default:
      return state;
  }
};

/*
action has type, and data
*/
const actionAddBook = (book) => async (dispatch) => {
  await fetch(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/aIlaxApD4aX5fUDfNGCE/books',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: book.id,
        title: book.title,
        author: book.author,
        category: book.category,
      }),
    },
  ).then(dispatch({ type: ADD_BOOK, payload: book }));
};

const actionRemoveBook = (id) => async (dispatch) => {
  await fetch(
    `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/aIlaxApD4aX5fUDfNGCE/books/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  ).then(dispatch({ type: REMOVE_BOOK, payload: id }));
};

const actionGetBooks = () => async (dispatch) => {
  const response = await fetch(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/aIlaxApD4aX5fUDfNGCE/books',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  ).then((data) => data.json());
  const fetchedBooks = [];
  Object.keys(response).forEach((key) => {
    fetchedBooks.push({ ...response[key][0], item_id: key });
  });
  dispatch({ type: GET_BOOKS, payload: fetchedBooks });
};

export default booksReducer;
export { actionAddBook, actionRemoveBook, actionGetBooks };

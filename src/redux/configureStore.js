/** @format */
import { combineReducers, createStore } from 'redux';
import { reducer as booksReducer } from './books/books';
import { reducer as categoryReducer } from './categories/categories';

const rootReducer = combineReducers({
  books: booksReducer,
  category: categoryReducer,
});

export default rootReducer;

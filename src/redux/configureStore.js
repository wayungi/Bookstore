/** @format */
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import reducer as booksReducer from './books/books';
import reducer as categoryReducer from './categories/categories';

const rootReducer = combineReducers({
  books: booksReducer,
  category: categoryReducer,
});

const store = configureStore(rootReducer);

export default rootReducer;
export { store };

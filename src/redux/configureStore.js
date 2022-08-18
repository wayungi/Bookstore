/** @format */
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import booksReducer from './books/books';
import categoryReducer from './categories/categories';

const rootReducer = combineReducers({
  books: booksReducer,
  category: categoryReducer,
});

const store = configureStore({
  reducer: rootReducer,
  state: [
    { id: 1, title: 'Cross roads', completed: false },
    { id: 2, title: 'Archery', completed: true },
    { id: 2, title: 'The river between', completed: false },
  ],
});

export default rootReducer;
export { store };

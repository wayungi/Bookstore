/** @format */
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import booksReducer from './books/books';
import categoryReducer from './categories/categories';

const rootReducer = combineReducers({
  books: booksReducer,
  category: categoryReducer,
});

const store = configureStore({
  reducer: rootReducer,
}, applyMiddleware(thunk));

export default rootReducer;
export { store };

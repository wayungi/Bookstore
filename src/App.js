/** @format */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Books from './components/pages/BookList';
import Categories from './components/pages/Categories';
import Navigation from './components/partials/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

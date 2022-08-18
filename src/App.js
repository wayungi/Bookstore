/** @format */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Books from './components/pages/BookList';
import Categories from './components/pages/Categories';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

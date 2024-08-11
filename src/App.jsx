import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Books from './pages/Books';
import BookDetail from './pages/BookDetail';
import Quotes from './pages/Quotes';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/books">Books</Link> | <Link to="/quotes">Quotes</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:bookId" element={<BookDetail />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </Router>
  );
}

export default App;

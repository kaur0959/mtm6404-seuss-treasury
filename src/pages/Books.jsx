import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://seussology.info/api/books')
      .then(response => response.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <div>
      <h1>Books</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {books.map(book => (
          <Link key={book.id} to={`/books/${book.id}`}>
            <img src={book.image} alt={book.title} style={{ width: '150px', margin: '10px' }} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Books;

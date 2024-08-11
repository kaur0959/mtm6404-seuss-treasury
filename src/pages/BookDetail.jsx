import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function BookDetail() {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://seussology.info/api/books/${bookId}`)
      .then(response => response.json())
      .then(data => setBook(data));
  }, [bookId]);

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <h1>{book.title}</h1>
      <img src={book.image} alt={book.title} style={{ width: '200px' }} />
      <p>{book.description}</p>
    </div>
  );
}

export default BookDetail;

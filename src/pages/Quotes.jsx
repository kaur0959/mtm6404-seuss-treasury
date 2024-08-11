import React, { useEffect, useState } from 'react';

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch('https://seussology.info/api/quotes/random/10')
      .then((response) => response.json())
      .then((data) => setQuotes(data))
      .catch((error) => console.error('Error fetching quotes:', error));
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Inspirational Quotes</h1>
      <ol className="list-group">
        {quotes.map((quote) => (
          <li key={quote.id} className="list-group-item mb-2">
            <blockquote className="blockquote">
              <p className="mb-0">{quote.text}</p>
              <footer className="blockquote-footer mt-2">
                From <cite title="Source Title">{quote.book.title}</cite>
              </footer>
            </blockquote>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Quotes;

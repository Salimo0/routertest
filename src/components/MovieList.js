// MovieList.js
import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie">
          <Link to={`/movie/${movie.id}`}>
            <h2>{movie.title}</h2>
            <img src={movie.posterURL} alt={movie.title} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;

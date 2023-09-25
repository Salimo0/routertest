// MovieDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id.toString() === id);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <img src={movie.posterURL} alt={movie.title} />
      <p>Rating: {movie.rating}</p>
      <a href={movie.trailerURL} target="_blank" rel="noopener noreferrer">
        Watch Trailer
      </a>
    </div>
  );
};

export default MovieDetails;

// MovieDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = ({ movies }) => {
    // Get the movie ID from the URL params
    const { id } = useParams();

    // Find the movie with the matching ID
    const movie = movies.find((movie) => movie.id === parseInt(id));

    // If the movie is not found, handle the error
    if (!movie) {
        return <div>Movie not found</div>;
    }

    return (
        <div className="movie-details">
            <h2>{movie.title}</h2>
            <img src={movie.posterURL} alt={movie.title} />
            <p>{movie.description}</p>
            <p>Rating: {movie.rating}</p>
            <a href={movie.trailerURL} target="_blank" rel="noopener noreferrer">
                Watch Trailer
            </a>
        </div>
    );
};

export default MovieDetails;

// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import Movies from './components/Movies';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <h1>Movie Trailers</h1>
        <Routes>
          <Route path="/" element={<MovieList movies={Movies} />} />
          <Route path="/movie/:id" element={<MovieList movies={Movies} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

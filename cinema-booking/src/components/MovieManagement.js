import React, { useState, useEffect } from "react";

function MovieManagement() {
  const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState({
    title: "",
    genre: "",
    duration: "",
    language: "",
    rating: "",
  });

  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem("movies")) || [];
    setMovies(savedMovies);
  }, []);

  const handleAddMovie = () => {
    const updatedMovies = [...movies, newMovie];
    setMovies(updatedMovies);
    localStorage.setItem("movies", JSON.stringify(updatedMovies));
    setNewMovie({ title: "", genre: "", duration: "", language: "", rating: "" });
  };

  const handleDeleteMovie = (index) => {
    const updatedMovies = movies.filter((_, i) => i !== index);
    setMovies(updatedMovies);
    localStorage.setItem("movies", JSON.stringify(updatedMovies));
  };

  return (
    <div>
      <h2>Movie Management</h2>
      <div>
        <h3>Add New Movie</h3>
        <input
          placeholder="Title"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
        />
        <input
          placeholder="Genre"
          value={newMovie.genre}
          onChange={(e) => setNewMovie({ ...newMovie, genre: e.target.value })}
        />
        <input
          placeholder="Duration"
          value={newMovie.duration}
          onChange={(e) => setNewMovie({ ...newMovie, duration: e.target.value })}
        />
        <input
          placeholder="Language"
          value={newMovie.language}
          onChange={(e) => setNewMovie({ ...newMovie, language: e.target.value })}
        />
        <input
          placeholder="Rating"
          value={newMovie.rating}
          onChange={(e) => setNewMovie({ ...newMovie, rating: e.target.value })}
        />
        <button onClick={handleAddMovie}>Add Movie</button>
      </div>
      <h3>Movie List</h3>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            {movie.title} - {movie.genre} - {movie.duration} mins
            <button onClick={() => handleDeleteMovie(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieManagement;

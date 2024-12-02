import React, { useState } from "react";
import "../App.css";

const ShowtimeManagement = ({ movies, showtimes, setShowtimes }) => {
  const [newShowtime, setNewShowtime] = useState({
    movieId: "",
    date: "",
    time: "",
    availableSeats: "",
  });

  const handleAddShowtime = () => {
    if (!newShowtime.movieId) {
      alert("Please select a movie.");
      return;
    }
    // Ensure `movieId` is stored as the same type as `id` in movies (e.g., string).
    const formattedShowtime = {
      ...newShowtime,
      movieId: newShowtime.movieId.toString(),
      id: Date.now(),
    };
    setShowtimes([...showtimes, formattedShowtime]);
    setNewShowtime({ movieId: "", date: "", time: "", availableSeats: "" }); // Reset form
  };

  const handleDeleteShowtime = (id) => {
    setShowtimes(showtimes.filter((showtime) => showtime.id !== id));
  };

  return (
    <div>
      <h2>Showtime Management</h2>
      <div>
        {/* Dropdown for selecting a movie */}
        <select
          value={newShowtime.movieId}
          onChange={(e) => setNewShowtime({ ...newShowtime, movieId: e.target.value })}
        >
          <option value="">Select Movie</option>
          {movies.map((movie) => (
            <option key={movie.id} value={movie.id}>
              {movie.title}
            </option>
          ))}
        </select>

        {/* Inputs for date, time, and available seats */}
        <input
          type="date"
          value={newShowtime.date}
          onChange={(e) => setNewShowtime({ ...newShowtime, date: e.target.value })}
        />
        <input
          type="time"
          value={newShowtime.time}
          onChange={(e) => setNewShowtime({ ...newShowtime, time: e.target.value })}
        />
        <input
          type="number"
          placeholder="Available Seats"
          value={newShowtime.availableSeats}
          onChange={(e) => setNewShowtime({ ...newShowtime, availableSeats: e.target.value })}
        />
        <button onClick={handleAddShowtime}>Add Showtime</button>
      </div>

      {/* Display the list of showtimes */}
      <ul>
        {showtimes.map((showtime) => {
          const movie = movies.find((movie) => movie.id.toString() === showtime.movieId);
          return (
            <li key={showtime.id}>
              {movie ? movie.title : "Unknown Movie"} - {showtime.date} {showtime.time} 
              ({showtime.availableSeats} seats available)
              <button onClick={() => handleDeleteShowtime(showtime.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ShowtimeManagement;

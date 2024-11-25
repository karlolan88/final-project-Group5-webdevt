import React, { useState } from "react";

function ShowtimeManagement() {
  const [showtimes, setShowtimes] = useState([]);
  const [newShowtime, setNewShowtime] = useState({
    movie: "",
    date: "",
    time: "",
    seats: "",
  });

  const handleAddShowtime = () => {
    const updatedShowtimes = [...showtimes, newShowtime];
    setShowtimes(updatedShowtimes);
    setNewShowtime({ movie: "", date: "", time: "", seats: "" });
  };

  const handleDeleteShowtime = (index) => {
    const updatedShowtimes = showtimes.filter((_, i) => i !== index);
    setShowtimes(updatedShowtimes);
  };

  return (
    <div>
      <h2>Showtime Management</h2>
      <div>
        <input
          placeholder="Movie"
          value={newShowtime.movie}
          onChange={(e) => setNewShowtime({ ...newShowtime, movie: e.target.value })}
        />
        <input
          placeholder="Date"
          value={newShowtime.date}
          onChange={(e) => setNewShowtime({ ...newShowtime, date: e.target.value })}
        />
        <input
          placeholder="Time"
          value={newShowtime.time}
          onChange={(e) => setNewShowtime({ ...newShowtime, time: e.target.value })}
        />
        <input
          placeholder="Seats"
          value={newShowtime.seats}
          onChange={(e) => setNewShowtime({ ...newShowtime, seats: e.target.value })}
        />
        <button onClick={handleAddShowtime}>Add Showtime</button>
      </div>
      <h3>Showtime List</h3>
      <ul>
        {showtimes.map((showtime, index) => (
          <li key={index}>
            {showtime.movie} - {showtime.date} - {showtime.time} ({showtime.seats} seats)
            <button onClick={() => handleDeleteShowtime(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShowtimeManagement;

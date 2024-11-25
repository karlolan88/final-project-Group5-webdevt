import React, { useState, useEffect } from "react";

function TicketBooking() {
  const [bookings, setBookings] = useState([]);
  const [newBooking, setNewBooking] = useState({
    movie: "",
    showtime: "",
    seats: 1,
  });
  const [movies, setMovies] = useState([]);
  const [showtimes, setShowtimes] = useState([]);

  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem("movies")) || [];
    const savedShowtimes = JSON.parse(localStorage.getItem("showtimes")) || [];
    setMovies(savedMovies);
    setShowtimes(savedShowtimes);

    const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(savedBookings);
  }, []);

  const handleAddBooking = () => {
    const updatedBookings = [...bookings, { ...newBooking, id: Date.now() }];
    setBookings(updatedBookings);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
    setNewBooking({ movie: "", showtime: "", seats: 1 });
  };

  const handleDeleteBooking = (id) => {
    const updatedBookings = bookings.filter((booking) => booking.id !== id);
    setBookings(updatedBookings);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
  };

  return (
    <div>
      <h2>Ticket Booking</h2>
      <div>
        <h3>New Booking</h3>
        <select
          value={newBooking.movie}
          onChange={(e) => setNewBooking({ ...newBooking, movie: e.target.value })}
        >
          <option value="">Select Movie</option>
          {movies.map((movie, index) => (
            <option key={index} value={movie.title}>
              {movie.title}
            </option>
          ))}
        </select>
        <select
          value={newBooking.showtime}
          onChange={(e) =>
            setNewBooking({ ...newBooking, showtime: e.target.value })
          }
        >
          <option value="">Select Showtime</option>
          {showtimes.map((showtime, index) => (
            <option key={index} value={`${showtime.date} ${showtime.time}`}>
              {showtime.movie} - {showtime.date} {showtime.time}
            </option>
          ))}
        </select>
        <input
          type="number"
          min="1"
          value={newBooking.seats}
          onChange={(e) => setNewBooking({ ...newBooking, seats: e.target.value })}
        />
        <button onClick={handleAddBooking}>Book Ticket</button>
      </div>
      <h3>Booking List</h3>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            {booking.movie} - {booking.showtime} ({booking.seats} seats)
            <button onClick={() => handleDeleteBooking(booking.id)}>Cancel</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TicketBooking;

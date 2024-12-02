import React, { useState } from "react";
import MovieManagement from "./MovieManagement";
import ShowtimeManagement from "./ShowtimeManagement";
import TicketBooking from "./TicketBooking";
import UserAccountManagement from "./UserAccountManagement";
import '../App.css'; // Import CSS for styles

const AdminDashboard = ({ users, setUsers, movies, setMovies, showtimes, setShowtimes, bookings, setBookings }) => {
  const [activeTab, setActiveTab] = useState("movies"); // Default tab
  const adminUsers = users.filter((user) => user.role === "admin");

  const renderTabContent = () => {
    switch (activeTab) {
      case "movies":
        return <MovieManagement movies={movies} setMovies={setMovies} />;
      case "showtimes":
        return <ShowtimeManagement movies={movies} showtimes={showtimes} setShowtimes={setShowtimes} />;
      case "bookings":
        return <TicketBooking bookings={bookings} setBookings={setBookings} />;
      case "users":
        return <UserAccountManagement users={users} setUsers={setUsers} />;
      default:
        return null;
    }
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      {adminUsers.length > 0 ? (
        <div>
          <h3>Admin Tools</h3>
          {/* Tab Navigation */}
          <div className="tab-container">
            <button
              className={`tab-button ${activeTab === "movies" ? "active" : ""}`}
              onClick={() => setActiveTab("movies")}
            >
              Movie Management
            </button>
            <button
              className={`tab-button ${activeTab === "showtimes" ? "active" : ""}`}
              onClick={() => setActiveTab("showtimes")}
            >
              Showtime Management
            </button>
            <button
              className={`tab-button ${activeTab === "bookings" ? "active" : ""}`}
              onClick={() => setActiveTab("bookings")}
            >
              Booking Management
            </button>
            <button
              className={`tab-button ${activeTab === "users" ? "active" : ""}`}
              onClick={() => setActiveTab("users")}
            >
              User Account Management
            </button>
          </div>

          {/* Tab Content */}
          <div className="tab-content">{renderTabContent()}</div>
        </div>
      ) : (
        <p>No admins are currently registered. Add an admin user to enable this section.</p>
      )}
    </div>
  );
};

export default AdminDashboard;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieManagement from "./components/MovieManagement";
import ShowtimeManagement from "./components/ShowtimeManagement";
import TicketBooking from "./components/TicketBooking";
import UserAccountManagement from "./components/UserAccountManagement";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movies" element={<MovieManagement />} />
        <Route path="/showtimes" element={<ShowtimeManagement />} />
        <Route path="/bookings" element={<TicketBooking />} />
        <Route path="/users" element={<UserAccountManagement />} />
      </Routes>
    </Router>
  );
}

export default App;

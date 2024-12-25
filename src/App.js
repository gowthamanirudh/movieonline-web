import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MoviesAndEvents from './pages/MoviesAndEvents';
import Bookingpage from './pages/Bookings';
import Payment from './pages/Payment';
import ConfirmationPage from './pages/ConfirmationPage';


function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/movies" element={<MoviesAndEvents />} />
        <Route path="/booking/:movieId" element={<Bookingpage/>} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />

    </Routes>
</Router>
  );
}
export default App;

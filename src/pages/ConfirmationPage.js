import React from "react";
import { useLocation } from "react-router-dom";

const ConfirmationPage = () => {
  const location = useLocation();
  const { movieTitle, selectedSeats } = location.state || {};

  return (
    <div className="min-h-screen bg-gray-100 p-6 text-center">
      <h1 className="text-3xl font-bold mb-6">Booking Confirmed!</h1>
      <p className="text-xl mb-4">
        Thank you for booking! Enjoy watching <strong>{movieTitle}</strong>.
      </p>
      <p className="text-lg">
        Your Seats: {selectedSeats ? selectedSeats.map((seat) => `Row ${seat.row}, Seat ${seat.seat}`).join(", ") : "None"}
      </p>
    </div>
  );
};

export default ConfirmationPage;

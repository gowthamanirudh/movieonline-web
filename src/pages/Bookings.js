import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom";

const Bookingpage= () => {
  const navigate = useNavigate()
  const { movieId } = useParams(); // Fetch movie ID from the URL
  const movies = [
    {
      id: 1,
      title: "Lucky Baskar",
      timings: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"],
    },
    {
      id: 2,
      title: "GOAT",
      timings: ["9:30 AM", "12:30 PM", "3:30 PM", "6:30 PM"],
    },
    {
        id: 3,
        title: "Gladiator 2",
        timings: ["9:30 AM", "12:30 PM", "3:30 PM", "6:30 PM"],
    },
    {
        id: 4,
        title: "Amaran",
        timings: ["9:30 AM", "12:30 PM", "3:30 PM", "6:30 PM"],
    },
    {
        id: 5,
        title: "Matka",
        timings: ["9:30 AM", "12:30 PM", "3:30 PM", "6:30 PM"],
    },
    {
        id: 6,
        title: "ufasa",
        timings: ["9:30 AM", "12:30 PM", "3:30 PM", "6:30 PM"],
    },
    {
        id: 7,
        title: "Venom 2",
        timings: ["9:30 AM", "12:30 PM", "3:30 PM", "6:30 PM"],
    },
    {
        id: 8,
        title: "Bloody Beggar",
        timings: ["9:30 AM", "12:30 PM", "3:30 PM", "6:30 PM"],
    },
    {
        id: 9,
        title: "Vettaiyan",
        timings: ["9:30 AM", "12:30 PM", "3:30 PM", "6:30 PM"],
    },
    {
        id: 10,
        title: "Kung Fu Panda 4",
        timings: ["9:30 AM", "12:30 PM", "3:30 PM", "6:30 PM"],
    },
    {
        id: 11,
        title: "Kal HO Naa Hoo",
        timings: ["9:30 AM", "12:30 PM", "3:30 PM", "6:30 PM"],
    },
    {
        id: 12,
        title: "Pushpa 2",
        timings: ["9:30 AM", "12:30 PM", "3:30 PM", "6:30 PM"],
    },
    {
        id: 13,
        title: "",
        timings: ["9:30 AM", "12:30 PM", "3:30 PM", "6:30 PM"],
    },
    // Add all movies from Home component here
  ];
//   const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P"];
//   const seatsPerRow = 20;

  const movie = movies.find((m) => m.id === parseInt(movieId));
  const [seating, setSeating] = useState(
    Array(5)
      .fill(0)
      .map(() => Array(10).fill(false)) // 5 rows x 10 seats, all unbooked (false)
  );
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Handle seat selection
  const handleSeatClick = (rowIndex, seatIndex) => {
    if (seating[rowIndex][seatIndex]) return; // Already booked
    const newSeating = seating.map((row, rIdx) =>
      row.map((seat, sIdx) => {
        if (rIdx === rowIndex && sIdx === seatIndex) {
          return !seat;
        }
        return seat;
      })
    );
    setSeating(newSeating);
    setSelectedSeats((prev) =>
      seating[rowIndex][seatIndex]
        ? prev.filter((seat) => seat.row !== rowIndex || seat.seat !== seatIndex)
        : [...prev, { row: rowIndex + 1, seat: seatIndex + 1 }]
    );
  };

  const confirmBooking = () => {
    if (selectedSeats.length === 0) {
        alert("Please select at least one seat.");
        return;
      }
  
    navigate("/payment", {
        state: { movieTitle: movie.title, selectedSeats },
      });
    // Reset seat selection
    setSelectedSeats([]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">{movie.title}</h1>
      <h2 className="text-xl mb-4">Select Timing</h2>
      <div className="flex gap-4 mb-6">
        {movie.timings.map((time, idx) => (
          <button
            key={idx}
            className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {time}
          </button>
        ))}
      </div>

      <h2 className="text-xl mb-4">Seating Arrangement</h2>
      <div className="grid grid-cols-10 gap-2">
        {seating.map((row, rowIndex) =>
          row.map((seat, seatIndex) => (
            <div
              key={`${rowIndex}-${seatIndex}`}
              onClick={() => handleSeatClick(rowIndex, seatIndex)}
              className={`w-8 h-8 border ${
                seat ? "bg-red-600" : "bg-green-600"
              } cursor-pointer`}
            ></div>
          ))
        )}
      </div>
      <p className="mt-4">
        <strong>Selected Seats:</strong>{" "}
        {selectedSeats.length > 0
          ? selectedSeats
              .map((seat) => `Row ${seat.row}, Seat ${seat.seat}`)
              .join(", ")
          : "None"}
      </p>
      <button
        onClick={confirmBooking}
        className="mt-6 bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Confirm Booking
      </button>
    </div>
  );
};

export default Bookingpage;

import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { movieTitle, selectedSeats } = location.state || {};

  const [upiApp, setUpiApp] = useState("");
  const [bank, setBank] = useState("");
  const [cardType, setCardType] = useState("");

  const handlePayment = (method) => {
    alert(`Payment successful via ${method}!`);
    navigate("/confirmation", { state: { movieTitle, selectedSeats } });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Payment Page</h1>

      <h2 className="text-xl mb-4">Movie Details</h2>
      <p className="mb-2">
        <strong>Movie:</strong> {movieTitle || "N/A"}
      </p>
      <p className="mb-4">
        <strong>Selected Seats:</strong>{" "}
        {selectedSeats
          ? selectedSeats.map((seat) => `Row ${seat.row}, Seat ${seat.seat}`).join(", ")
          : "None"}
      </p>

      <h2 className="text-xl mb-4">Select Payment Method</h2>

      {/* UPI Apps */}
      <div className="mb-6">
        <label className="block text-lg font-medium mb-2">UPI Apps</label>
        <select
          className="block w-[300px] bg-white border border-gray-300 rounded px-4 py-2"
          value={upiApp}
          onChange={(e) => setUpiApp(e.target.value)}
        >
          <option value="">Select UPI App</option>
          <option value="Google Pay">Google Pay (GPay)</option>
          <option value="PhonePe">PhonePe</option>
          <option value="Paytm">Paytm</option>
        </select>
        {upiApp && (
          <button
            className="mt-4 bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={() => handlePayment(upiApp)}
          >
            Pay via {upiApp}
          </button>
        )}
      </div>

      {/* Net Banking */}
      <div className="mb-6">
        <label className="block text-lg font-medium mb-2">Net Banking</label>
        <select
          className="block w-[300px] bg-white border border-gray-300 rounded px-4 py-2"
          value={bank}
          onChange={(e) => setBank(e.target.value)}
        >
          <option value="">Select Bank</option>
          <option value="HDFC Bank">HDFC Bank</option>
          <option value="State Bank of India">State Bank of India</option>
          <option value="ICICI Bank">ICICI Bank</option>
          <option value="Axis Bank">Axis Bank</option>
        </select>
        {bank && (
          <button
            className="mt-4 bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={() => handlePayment(bank)}
          >
            Pay via {bank}
          </button>
        )}
      </div>

      {/* Credit/Debit Card */}
      <div className="mb-6">
        <label className="block text-lg font-medium mb-2">Credit/Debit Card</label>
        <div className="flex items-center mb-2">
          <input
            type="radio"
            id="creditCard"
            name="cardType"
            value="Credit Card"
            onChange={(e) => setCardType(e.target.value)}
            className="mr-2"
          />
          <label htmlFor="creditCard" className="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg"
              alt="MasterCard"
              className="h-6 mr-2"
            />
          </label>
        </div>
        <div className="flex items-center mb-2">
          <input
            type="radio"
            id="debitCard"
            name="cardType"
            value="Debit Card"
            onChange={(e) => setCardType(e.target.value)}
            className="mr-2"
          />
          <label htmlFor="debitCard" className="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
              alt="Visa"
              className="h-6 mr-2"
            />
          </label>
           {/* American Express Option */}
        <div className="flex items-center mb-2">
          <input
            type="radio"
            id="amexCard"
            name="cardType"
            value="American Express"
            onChange={(e) => setCardType(e.target.value)}
            className="mr-2"
          />
          <label htmlFor="amexCard" className="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/225px-American_Express_logo_%282018%29.svg.png"
              alt="American Express"
              className="h-6 mr-2"
            />
          </label>
        </div>
         {/* Discover Option */}
         <div className="flex items-center mb-2">
          <input
            type="radio"
            id="discoverCard"
            name="cardType"
            value="Discover"
            onChange={(e) => setCardType(e.target.value)}
            className="mr-2"
          />
          <label htmlFor="discoverCard" className="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Discover_Card_logo.svg/263px-Discover_Card_logo.svg.png"
              alt="Discover"
              className="h-6 mr-2"
            />
          </label>
        </div>
         {/* JCB Option */}
         <div className="flex items-center mb-2">
          <input
            type="radio"
            id="jcbCard"
            name="cardType"
            value="JCB"
            onChange={(e) => setCardType(e.target.value)}
            className="mr-2"
          />
          <label htmlFor="jcbCard" className="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/JCB_logo.svg/300px-JCB_logo.svg.png"
              alt="JCB"
              className="h-6 mr-2"
            />
          </label>
        </div>
        {/* Diners Club Option */}
        <div className="flex items-center mb-2">
          <input
            type="radio"
            id="dinersClubCard"
            name="cardType"
            value="Diners Club"
            onChange={(e) => setCardType(e.target.value)}
            className="mr-2"
          />
          <label htmlFor="dinersClubCard" className="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Diners_Club_Logo3.svg/330px-Diners_Club_Logo3.svg.png"
              alt="Diners Club"
              className="h-6 mr-2"
            />
          </label>
        </div>

        </div>
        
        {cardType && (
          <button
            className="mt-4 bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={() => handlePayment(cardType)}
          >
            Pay via {cardType}
          </button>
        )}
      </div>
    </div>
  );
};

export default Payment;

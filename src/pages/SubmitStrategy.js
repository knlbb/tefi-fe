import React, { useState } from "react";

const TradeSignalForm = () => {
  const [tradeDetails, setTradeDetails] = useState({
    tokenPair: "",
    positionType: "long",
    entryPrice: "",
    stopLoss: "",
    takeProfit: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTradeDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Trade Submitted: ", tradeDetails);
    alert("Trade signal submitted successfully!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-bold text-center text-gray-800 mb-6">
          Submit a Binance Trade Signal
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 font-medium mb-2">
              Token Pair (e.g., BTC/USDT)
            </label>
            <input
              type="text"
              name="tokenPair"
              value={tradeDetails.tokenPair}
              onChange={handleChange}
              placeholder="e.g., BTC/USDT"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-600 font-medium mb-2">
              Position Type
            </label>
            <select
              name="positionType"
              value={tradeDetails.positionType}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="long">Long</option>
              <option value="short">Short</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-600 font-medium mb-2">
              Entry Price
            </label>
            <input
              type="number"
              name="entryPrice"
              value={tradeDetails.entryPrice}
              onChange={handleChange}
              placeholder="e.g., 42500"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-600 font-medium mb-2">
              Stop Loss
            </label>
            <input
              type="number"
              name="stopLoss"
              value={tradeDetails.stopLoss}
              onChange={handleChange}
              placeholder="e.g., 41800"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-600 font-medium mb-2">
              Take Profit
            </label>
            <input
              type="number"
              name="takeProfit"
              value={tradeDetails.takeProfit}
              onChange={handleChange}
              placeholder="e.g., 44000"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Submit Signal
          </button>
        </form>
      </div>
    </div>
  );
};

export default TradeSignalForm;

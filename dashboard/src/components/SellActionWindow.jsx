import React, { useState, useContext } from "react";
import GeneralContext from "./GeneralContext";
import axios from "axios";
import "./BuyActionWindow.css"; // You can reuse the same CSS

const SellActionWindow = ({ uid }) => {
  const { closeSellWindow } = useContext(GeneralContext); // ✅ Consume context

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleSellClick = () => {
    axios.post(`${import.meta.env.VITE_API_URL}/newOrder`, {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "SELL",
    });
    closeSellWindow(); // ✅ Close window via context
  };

  return (
    <div className="container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(Number(e.target.value))}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              step="0.05"
              value={stockPrice}
              onChange={(e) => setStockPrice(Number(e.target.value))}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button className="btn btn-red" onClick={handleSellClick}>Sell</button>
          <button className="btn btn-grey" onClick={closeSellWindow}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
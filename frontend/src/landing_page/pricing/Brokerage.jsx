import { useState } from "react";

function Brokerage() {
  const [activeTab, setActiveTab] = useState("Equity");

  const equityData = [
    { type: "Brokerage", delivery: "Zero Brokerage", intraday: "0.03% or Rs. 20/executed order whichever is lower", fnoFutures: "0.03% or Rs. 20/executed order whichever is lower", fnoOptions: "Flat Rs. 20 per executed order" },
    { type: "STT/CTT", delivery: "0.1% on buy & sell", intraday: "0.025% on the sell side", fnoFutures: "0.02% on the sell side", fnoOptions: "0.125% on options bought and exercised; 0.1% on sell side (on premium)" },
    { type: "Transaction charges", delivery: "NSE: 0.00297% BSE: 0.00375%", intraday: "NSE: 0.00297% BSE: 0.00375%", fnoFutures: "NSE: 0.00173% BSE: 0", fnoOptions: "NSE: 0.03503% (on premium) BSE: 0.0325% (on premium)" },
    { type: "GST", delivery: "18% (brokerage + SEBI charges + transaction charges)", intraday: "18% (brokerage + SEBI charges + transaction charges)", fnoFutures: "18% (brokerage + SEBI charges + transaction charges)", fnoOptions: "18% (brokerage + SEBI charges + transaction charges)" },
    { type: "SEBI charges", delivery: "₹10 / crore", intraday: "₹10 / crore", fnoFutures: "₹10 / crore", fnoOptions: "₹10 / crore" },
    { type: "Stamp charges", delivery: "0.015% or ₹1500 / crore on buy side", intraday: "0.003% or ₹300 / crore on buy side", fnoFutures: "0.002% or ₹200 / crore on buy side", fnoOptions: "0.003% or ₹300 / crore on buy side" },
  ];

  const accountData = [
    { type: "Online account", charges: "FREE" },
    { type: "Offline account", charges: "FREE" },
    { type: "NRI account (offline only)", charges: "₹500" },
    { type: "Partnership, LLP, HUF, or Corporate accounts (offline only)", charges: "₹500" },
  ];

  return (
    <div className="container py-5">
      {/* Tabs */}
      <ul className="nav nav-tabs mb-4">
        {["Equity", "Currency", "Commodity"].map((tab) => (
          <li className="nav-item" key={tab}>
            <button
              className={`nav-link ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>

      {/* Pricing Table */}
      <div className="table-responsive">
        <table className="table table-bordered text-center">
          <thead className="table-light">
            <tr>
              <th>Type</th>
              <th>Equity delivery</th>
              <th>Equity intraday</th>
              <th>F&O - Futures</th>
              <th>F&O - Options</th>
            </tr>
          </thead>
          <tbody>
            {equityData.map((row, index) => (
              <tr key={index}>
                <td>{row.type}</td>
                <td>{row.delivery}</td>
                <td>{row.intraday}</td>
                <td>{row.fnoFutures}</td>
                <td>{row.fnoOptions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-center mt-2">
        Calculate your costs <a href="#">upfront</a> using our brokerage calculator
      </p>

      {/* Account Opening Charges */}
      <h4 className="mt-5 mb-3">Charges for account opening</h4>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th>Type of account</th>
              <th>Charges</th>
            </tr>
          </thead>
          <tbody>
            {accountData.map((row, index) => (
              <tr key={index}>
                <td>{row.type}</td>
                <td>{row.charges}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Brokerage;

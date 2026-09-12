import React, { useState } from "react";

export default function CreateTicket() {
  const [openIndex, setOpenIndex] = useState(null);

  const accordionItems = [
    { title: "Account Opening", content: "Details about how to open an account and required documents.", icon: "➕" },
    { title: "Your Zerodha Account", content: "Help related to login, KYC, and profile details.", icon: "👤" },
    { title: "Kite", content: "Troubleshooting Kite app and web platform.", icon: "🌐" },
    { title: "Funds", content: "Add, withdraw, or transfer funds help section.", icon: "💰" },
    { title: "Console", content: "Understanding Console reports and portfolio tools.", icon: "⚙️" },
    { title: "Coin", content: "Learn about Coin mutual fund investments.", icon: "🪙" },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="row">
          {/* Left Accordion */}
          <div className="col-md-8 mb-4">
            <div className="accordion" id="supportAccordion">
              {accordionItems.map((item, idx) => (
                <div className="accordion-item" key={idx}>
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${openIndex === idx ? "" : "collapsed"}`}
                      type="button"
                      onClick={() => toggleAccordion(idx)}
                    >
                      <span className="me-2">{item.icon}</span> {item.title}
                    </button>
                  </h2>
                  <div className={`accordion-collapse collapse ${openIndex === idx ? "show" : ""}`}>
                    <div className="accordion-body">{item.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Quick Links */}
          <div className="col-md-4">
            <div className="card mb-3 border-start border-4 border-warning bg-warning bg-opacity-25">
              <div className="card-body">
                <ul className="list-unstyled mb-0">
                  <li><a href="#">Trading holiday on account of Diwali-Balipratipada on October 22, 2025</a></li>
                  <li><a href="#">Muhurat Trading session on account of Diwali, October 2025</a></li>
                </ul>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Quick links</h5>
                <ul className="list-unstyled">
                  <li><a href="#">1. Track account opening</a></li>
                  <li><a href="#">2. Track segment activation</a></li>
                  <li><a href="#">3. Intraday margins</a></li>
                  <li><a href="#">4. Kite user manual</a></li>
                  <li><a href="#">5. Learn how to create a ticket</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChargesSection() {
    return ( 
          <div className="container my-5 text-muted">
      {/* Demat AMC Table */}
      <h2 className="mb-3">Demat AMC (Annual Maintenance Charge)</h2>
      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>Value of holdings</th>
            <th>AMC</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Up to ₹1 lakh</td>
            <td className="text-success">Free*</td>
          </tr>
          <tr>
            <td>₹1 lakh - ₹10 lakh</td>
            <td>₹100 per year, charged quarterly*</td>
          </tr>
          <tr>
            <td>Above ₹10 lakh</td>
            <td>₹300 per year, charged quarterly*</td>
          </tr>
        </tbody>
      </table>
      <p className="text-muted fst-italic">
        *Lower AMC is applicable only if the account qualifies as a Basic
        Services Demat Account (BSDA). BSDA account holders cannot hold more
        than one demat account. To learn more about BSDA,{" "}
        <a href="#">click here</a>.
      </p>

      {/* Optional Value Added Services */}
      <h2 className="mt-5 mb-3">Charges for optional value added services</h2>
      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>Service</th>
            <th>Billing Frequency</th>
            <th>Charges</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tickertape</td>
            <td>Monthly / Annual</td>
            <td>Free | Pro: ₹249/2399</td>
          </tr>
          <tr>
            <td>Smallcase</td>
            <td>Per transaction</td>
            <td>Buy & Invest More: ₹100 | SIP: 10</td>
          </tr>
          <tr>
            <td>Kite Connect</td>
            <td>Monthly</td>
            <td>Connect: 500 | Personal: Free</td>
          </tr>
        </tbody>
      </table>

      {/* Charges Explained */}
      <h2 className="mt-5 mb-3">Charges explained</h2>
      <div className="row text-muted">
        <div className="col-md-6">
          <h5>Securities/Commodities transaction tax</h5>
          <p>
            Tax by the government when transacting on the exchanges. Charged as
            above on both Buy and Sell sides when trading equity delivery. Charged
            only on selling side when trading in intraday or F&O.
          </p>

          <h5>Transaction/Turnover Charges</h5>
          <p>
            Charged by exchanges (NSE, BSE, MCX) on the value of your
            transactions. Kite has invested transaction charges in <strong>₹</strong> 
            slabs depending on your trading.
          </p>

          <h5>Call & Trade</h5>
          <p>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>

          <h5>Stamp charges</h5>
          <p>
            Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transactions in instruments on the stock exchanges and depositories.
          </p>
        </div>

        <div className="col-md-6">
          <h5>GST</h5>
          <p>
            Tax levied by the government on the services rendered. 18% of brokerage + SEBI charges is applicable.
          </p>

          <h5>SEBI Charges</h5>
          <p>
            Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.
          </p>

          <h5>DP (Depository participant) charges</h5>
          <p>
            ₹15 per equity (₹15 cash, ₹5 F&O). Flat fees for account maintenance.
          </p>

          <h5>AMC (Account maintenance charges)</h5>
          <p>
            For BSDA demat account: Zero charges if holding value is less than ₹2,00,000. For non-BSDA: ₹300/year.
          </p>
        </div>
      </div>
    </div>
     );
}

export default ChargesSection;
function Hero() {
    return ( 
            <div className="container text-muted">
                <div className="row p-5 mt-5 border-bottom text-center">
                    <h1>Pricing</h1>
                    <h3 className="mt-3 fs-5">Free equity investments and flat  ₹ 20 traday and F&0 trades </h3>
                </div>
                <div className="row p-5 mt-5 border-bottom text-center">
                    <div className="col-4">
                        <img src="assets/pricing0.svg" style={{width:"80%"}} alt="" />
                        <h4>Free equity delivery</h4>
                        <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                    </div>
                    <div className="col-4">
                        <img src="assets\intradayTrades.svg" style={{width:"80%"}} alt="" />
                        <h4>Intraday and F&O trades</h4>
                        <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                    </div>
                    <div className="col-4">
                        <img src="assets/pricing0.svg" style={{width:"80%"}} alt="" />
                        <h4>Free direct MF</h4>
                        <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                    </div>
                </div>
            </div>
     );
}

export default Hero;
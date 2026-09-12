function Universe() {
    return ( 
        <div className="container text-center text-muted">
            <div className="row">
                <h4 className="mb-3">Want to know more about our technology stack? Check out the  <a href="">Zerodha.tech</a> blog.</h4>
                <h3 className="mb-2">The Zerodha Universe</h3>
                <h5>Extend your trading and investment experience even further with our partner platforms</h5>
            </div>
            <div className="row mt-5">
                <div className="col-4">
                    <img src="assets/zerodhaFundhouse.png"className="mb-2" style={{width:"70%"}} alt="" />
                    <p>Our asset management venture that is creating simple and transparent index funds to help you save for your goals</p>
                </div>
                 <div className="col-4">
                    <img src="assets/sensibull.png"className="mb-2" style={{width:"70%"}} alt="" />
                    <p>Options trading platform that lets you create strategies,analyze positions,and examine data points like open interest,FII/DII,and more.</p>
                 </div>
                  <div className="col-4">
                    <img src="assets/Tijori.png"className="mb-2"style={{width:"70%"}} alt="" />
                    <p>Investment research platform that offers detailed insights on stockks,sectors,supply chains,and more.</p>
                  </div>
            </div>
              <div className="row mt-5">
                <div className="col-4">
                    <img src="assets/streakLogo.png"className="mb-2" style={{width:"50%"}} alt="" />
                    <p>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                </div>
                 <div className="col-4">
                    <img src="assets/smallcaseLogo.png"className="mb-2" style={{width:"70%"}} alt="" />
                    <p>Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
                 </div>
                  <div className="col-4">
                    <img src="assets/dittoLogo.png"className="mb-2"style={{width:"50%"}} alt="" />
                    <p>Personalized advice on life and health insurance.No spam and no mis-selling.</p>
                  </div>
                  <div className="row mt-5">
                      <button className="p-2 btn btn-primary fs-5 mb-5 text-center" style={{width:"20%",margin:"0 auto"}}>Signup Now</button>
                  </div>
            </div>

        </div>
     );
}

export default Universe;
function Education() {
    return ( 
       <div className="container mt-5">
        <div className="row">
            <div className="col-6">
               <img src="assets/education.svg" style={{width:"70%"}} alt="" />
            </div>
             <div className="col-6">
               <h1 className="mb-3 fs-2">Free and open market education</h1>
               <p>Varsity,the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                 <a href="" className="mb-3">Versity <i className="fa-solid fa-arrow-right-long"></i> </a>
                 <p className="mt-5">tradingQ&A, the most active trading and investmnet community in India for all your market related queries.</p>
                   <a href="" className="mb-3">TradingQ&A <i className="fa-solid fa-arrow-right-long"></i> </a>
            </div>
        </div>
       </div>
     );
}

export default Education;   
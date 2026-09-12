function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container ">
      <div className="row p-5">
        <div className="col-6 p-3 text-center">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>

        <div className="col-lg-6 p-3 mt-3">
          <h2 className="mb-3">{productName}</h2>
          <p className="mb-4">{productDescription}</p>

          <div> <a href={tryDemo}>Try Demo <i className="fa-solid fa-arrow-right-long"></i></a> 
          <a href={learnMore} style={{marginLeft:"50px"}}>Learn More <i className="fa-solid fa-arrow-right-long"></i></a> </div>

          <div className="d-flex gap-3 mt-3">
            <a href={googlePlay}>
              <img src="assets/googlePlayBadge.svg" alt="Google Play" />
            </a>
            <a href={appStore}>
              <img src="assets/appstoreBadge.svg" alt="App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;

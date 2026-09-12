function RightSection({ imageURL, productName, productDescription, learnMore }) {
  return (
    <div className="container">
      <div className="row align-items-center">
        {/* Text Section */}
        <div className="col-6 p-3">
          <h2 className="mb-3">{productName}</h2>
          <p className="mb-0">{productDescription}</p> {/* Removed mb-4 */}
          <a href={learnMore} className="d-inline-block mt-3">
            Learn More <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>

        {/* Image Section */}
        <div className="col-6 p-3 text-center">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;

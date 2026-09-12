

export default function Hero() {
  return (
    <section className="bg-light py-5 mt-5">
      <div className="container text-center">
        <h1 className="mb-4">Support Portal</h1>

        <div className="mb-4">
          <button className="btn btn-primary">My Tickets</button>
        </div>

        <div className="d-flex justify-content-center">
          <div className="input-group w-75">
            <span className="input-group-text">🔍</span>
            <input
              type="text"
              className="form-control"
              placeholder="Eg: How do I open my account, How do I activate F&O..."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

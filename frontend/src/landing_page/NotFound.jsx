import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#ffffffff",
        color: "#343a40",
      }}
    >
      <h1 style={{ fontSize: "6rem", fontWeight: "bold", marginBottom: "1rem" }}>404</h1>
      <h2 style={{ marginBottom: "1rem" }}>Page Not Found</h2>
      <p style={{ marginBottom: "2rem", maxWidth: "400px" }}>
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          borderRadius: "5px",
          textDecoration: "none",
          fontWeight: "500",
        }}
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;

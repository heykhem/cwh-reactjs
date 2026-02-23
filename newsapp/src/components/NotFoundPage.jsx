import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="container mt-5 text-center">
      <h1>404 Error</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      {/* Optional: Add a link back to the homepage */}
      <Link to="/">Go to Home</Link>
    </div>
  );
}

export default NotFoundPage;

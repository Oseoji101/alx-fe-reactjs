import { Navigate } from "react-router-dom";

function ProtectedRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    alert("You must log in to access this page!");
    return <Navigate to="/" />;
  }

  return children;
}
export default ProtectedRoute;

import { Navigate } from "react-router-dom";


function useAuth() {
  
  const isAuthenticated = true;
  return { isAuthenticated };
}

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth(); 

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}


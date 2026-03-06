import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children, role }) {
  const { currentAdmin, currentUser } = useAuth();
  const location = useLocation();

  if (role === "admin" && !currentAdmin) {
    return <Navigate to="/admin/login" replace state={{ from: location }} />;
  }

  if (role === "user" && !currentUser) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
}

export default ProtectedRoute;

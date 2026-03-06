import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Anav from "./components/admin/Anav";
import Unav from "./components/user/Unav";
import { useAuth } from "./context/AuthContext";
import Addcar from "./pages/admin/Addcar";
import Acabedit from "./pages/admin/Acabedit";
import Acabs from "./pages/admin/Acabs";
import Ahome from "./pages/admin/Ahome";
import Alogin from "./pages/admin/Alogin";
import Aregister from "./pages/admin/Aregister";
import Bookings from "./pages/admin/Bookings";
import UserEdit from "./pages/admin/UserEdit";
import Users from "./pages/admin/Users";
import Home from "./pages/Home";
import BookCab from "./pages/user/BookCab";
import Cabs from "./pages/user/Cabs";
import Login from "./pages/user/Login";
import Mybookings from "./pages/user/Mybookings";
import Register from "./pages/user/Register";
import Uhome from "./pages/user/Uhome";

function UserLayout() {
  return (
    <div className="app-shell">
      <Unav />
      <main className="shell-content">
        <Routes>
          <Route path="home" element={<Uhome />} />
          <Route path="cabs" element={<Cabs />} />
          <Route path="bookings" element={<Mybookings />} />
          <Route path="*" element={<Navigate to="/u/home" replace />} />
        </Routes>
      </main>
    </div>
  );
}

function AdminLayout() {
  return (
    <div className="app-shell">
      <Anav />
      <main className="shell-content">
        <Routes>
          <Route path="home" element={<Ahome />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:id/edit" element={<UserEdit />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="cabs" element={<Acabs />} />
          <Route path="cabs/:id/edit" element={<Acabedit />} />
          <Route path="add-car" element={<Addcar />} />
          <Route path="*" element={<Navigate to="/a/home" replace />} />
        </Routes>
      </main>
    </div>
  );
}

function RootRedirect() {
  const { currentUser, currentAdmin } = useAuth();

  if (currentAdmin) {
    return <Navigate to="/a/home" replace />;
  }

  if (currentUser) {
    return <Navigate to="/u/home" replace />;
  }

  return <Home />;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootRedirect />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin/login" element={<Alogin />} />
      <Route path="/admin/register" element={<Aregister />} />
      <Route
        path="/u/*"
        element={
          <ProtectedRoute role="user">
            <UserLayout />
          </ProtectedRoute>
        }
      />
      <Route
        path="/bookcab/:id"
        element={
          <ProtectedRoute role="user">
            <div className="app-shell">
              <Unav />
              <main className="shell-content">
                <BookCab />
              </main>
            </div>
          </ProtectedRoute>
        }
      />
      <Route
        path="/a/*"
        element={
          <ProtectedRoute role="admin">
            <AdminLayout />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;

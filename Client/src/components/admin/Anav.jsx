import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Anav() {
  const { currentAdmin, logoutAdmin } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutAdmin();
    navigate("/");
  };

  return (
    <aside className="sidebar sidebar-admin">
      <div className="brand-mark">
        <span className="brand-kicker">OYC Control Room</span>
        <h1>Run the fleet.</h1>
      </div>

      <div className="profile-chip">
        <strong>{currentAdmin?.name}</strong>
        <span>{currentAdmin?.email}</span>
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/a/home">Overview</NavLink>
        <NavLink to="/a/users">Users</NavLink>
        <NavLink to="/a/bookings">Bookings</NavLink>
        <NavLink to="/a/cabs">Cabs</NavLink>
        <NavLink to="/a/add-car">Add Cab</NavLink>
      </nav>

      <button className="ghost-button" onClick={handleLogout}>
        Sign out
      </button>
    </aside>
  );
}

export default Anav;

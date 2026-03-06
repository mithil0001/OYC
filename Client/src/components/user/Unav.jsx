import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Unav() {
  const { currentUser, logoutUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  return (
    <aside className="sidebar">
      <div className="brand-mark">
        <span className="brand-kicker">Own Your Cab</span>
        <h1>Move with control.</h1>
      </div>

      <div className="profile-chip">
        <strong>{currentUser?.name}</strong>
        <span>{currentUser?.email}</span>
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/u/home">Dashboard</NavLink>
        <NavLink to="/u/cabs">Cabs</NavLink>
        <NavLink to="/u/bookings">My Bookings</NavLink>
      </nav>

      <button className="ghost-button" onClick={handleLogout}>
        Logout
      </button>
    </aside>
  );
}

export default Unav;

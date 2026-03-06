import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Uhome() {
  const { currentUser } = useAuth();

  return (
    <div className="page-grid">
      <section className="hero-card compact">
        <span className="eyebrow">User dashboard</span>
        <h2>Hello, {currentUser?.name?.split(" ")[0]}.</h2>
        <p>
          Plan your next route, compare available rides, and keep all bookings
          visible in one place.
        </p>
        <div className="hero-actions">
          <Link className="primary-button" to="/u/cabs">
            Explore Cabs
          </Link>
          <Link className="secondary-button" to="/u/bookings">
            View Bookings
          </Link>
        </div>
      </section>

      <section className="stats-grid">
        <article className="stat-card">
          <span>Identity</span>
          <strong>{currentUser?.email}</strong>
        </article>
        <article className="stat-card">
          <span>Phone</span>
          <strong>{currentUser?.phone || "Not added"}</strong>
        </article>
        <article className="stat-card">
          <span>Base city</span>
          <strong>{currentUser?.city || "Flexible"}</strong>
        </article>
      </section>
    </div>
  );
}

export default Uhome;

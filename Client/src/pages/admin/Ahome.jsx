import { useEffect, useState } from "react";
import { oycApi } from "../../services/oycApi";

function Ahome() {
  const [stats, setStats] = useState({ users: 0, cars: 0, bookings: 0 });

  useEffect(() => {
    Promise.all([oycApi.getUsers(), oycApi.getCars(), oycApi.getBookings()]).then(
      ([users, cars, bookings]) => {
        setStats({ users: users.length, cars: cars.length, bookings: bookings.length });
      }
    );
  }, []);

  return (
    <section className="stack-page">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Operations overview</span>
          <h2>Admin dashboard</h2>
        </div>
      </div>

      <div className="stats-grid">
        <article className="stat-card">
          <span>Users</span>
          <strong>{stats.users}</strong>
        </article>
        <article className="stat-card">
          <span>Cars</span>
          <strong>{stats.cars}</strong>
        </article>
        <article className="stat-card">
          <span>Bookings</span>
          <strong>{stats.bookings}</strong>
        </article>
      </div>
    </section>
  );
}

export default Ahome;

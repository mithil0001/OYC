import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { oycApi } from "../../services/oycApi";

function Cabs() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeType, setActiveType] = useState("All");

  useEffect(() => {
    let ignore = false;

    oycApi.getCars().then((data) => {
      if (!ignore) {
        setCars(data);
        setLoading(false);
      }
    });

    return () => {
      ignore = true;
    };
  }, []);

  const cabTypes = ["All", ...new Set(cars.map((car) => car.cartype))];
  const visibleCars =
    activeType === "All" ? cars : cars.filter((car) => car.cartype === activeType);

  return (
    <section className="stack-page">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Available fleet</span>
          <h2>Choose your cab.</h2>
        </div>
        <div className="filter-row">
          {cabTypes.map((type) => (
            <button
              key={type}
              type="button"
              className={type === activeType ? "filter-chip active" : "filter-chip"}
              onClick={() => setActiveType(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {loading ? <p className="muted-copy">Loading cabs...</p> : null}

      <div className="cab-grid">
        {visibleCars.map((car) => (
          <article className="cab-card" key={car.id || car._id}>
            <div className="cab-visual">
              <img
                src={car.carImage}
                alt={car.carname}
                style={{ objectPosition: car.imagePosition || "center center" }}
              />
              <div className="cab-overlay">
                <span className="pill">{car.cartype}</span>
                <span className="cab-status">{car.status || "Available"}</span>
              </div>
            </div>
            <div className="cab-body">
              <div className="cab-title-row">
                <div>
                  <h3>{car.carname}</h3>
                  <p className="cab-subline">Driver: {car.drivername}</p>
                </div>
                <strong className="fare-tag">Rs. {car.price}/km</strong>
              </div>
              <p className="cab-description">
                {car.description ||
                  "Comfort-focused cab with clean interiors, verified driver assignment, and direct pickup scheduling."}
              </p>
              <div className="cab-specs">
                <span>{car.seats || 4} seats</span>
                <span>{car.fuel || "Fuel"}</span>
                <span>{car.transmission || "Manual"}</span>
              </div>
              <div className="card-meta">
                <div>
                  <span className="meta-label">Plate</span>
                  <strong>{car.carno}</strong>
                </div>
                <div>
                  <span className="meta-label">Best for</span>
                  <strong>{car.bestFor || "City and intercity travel"}</strong>
                </div>
              </div>
              <Link className="primary-button" to={`/bookcab/${car.id || car._id}`}>
                Book
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Cabs;

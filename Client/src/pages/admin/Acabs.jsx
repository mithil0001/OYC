import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { oycApi } from "../../services/oycApi";

function Acabs() {
  const [cars, setCars] = useState([]);

  const loadCars = () => {
    oycApi.getCars().then(setCars);
  };

  useEffect(() => {
    loadCars();
  }, []);

  const handleDelete = async (id) => {
    await oycApi.deleteCar(id);
    loadCars();
  };

  return (
    <section className="stack-page">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Fleet table</span>
          <h2>All cabs</h2>
        </div>
      </div>
      <div className="table-card">
        {cars.map((car) => (
          <article className="table-row" key={car.id || car._id}>
            <div>
              <strong>{car.carname}</strong>
              <p>{car.drivername}</p>
            </div>
            <div>
              <p>{car.carno}</p>
              <span>{car.cartype}</span>
            </div>
            <div className="row-actions">
              <Link className="secondary-button" to={`/a/cabs/${car.id || car._id}/edit`}>
                Edit
              </Link>
              <button className="ghost-button danger" onClick={() => handleDelete(car.id || car._id)}>
                Delete
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Acabs;

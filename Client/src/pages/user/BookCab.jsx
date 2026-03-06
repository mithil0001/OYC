import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { oycApi } from "../../services/oycApi";

function BookCab() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [car, setCar] = useState(null);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    selectedPickupState: "",
    selectedPickupCity: "",
    selectedDropState: "",
    selectedDropCity: "",
    pickupdate: "",
    pickuptime: "",
    dropdate: "",
    droptime: "",
  });

  useEffect(() => {
    oycApi.getCarById(id).then(setCar);
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!car) {
      return;
    }

    setSaving(true);
    setMessage("");

    const payload = {
      ...form,
      drivername: car.drivername,
      fare: `${Number(car.price) * 180}`,
      carname: car.carname,
      cartype: car.cartype,
      carno: car.carno,
      price: car.price,
      userId: currentUser.id || currentUser._id,
      userName: currentUser.name,
    };

    try {
      await oycApi.createBooking(payload);
      navigate("/u/bookings");
    } catch (error) {
      setMessage(error.response?.data?.message || error.message || "Booking failed");
    } finally {
      setSaving(false);
    }
  };

  if (!car) {
    return <p className="muted-copy">Loading cab details...</p>;
  }

  return (
    <section className="booking-layout">
      <article className="booking-summary">
        <img src={car.carImage} alt={car.carname} />
        <div>
          <span className="pill">{car.cartype}</span>
          <h2>{car.carname}</h2>
          <p>{car.carno}</p>
          <p>Driver: {car.drivername}</p>
          <strong>Rs. {car.price}/km</strong>
        </div>
      </article>

      <form className="booking-form" onSubmit={handleSubmit}>
        <h2>Book this cab</h2>
        <div className="form-grid">
          <input
            placeholder="Pickup state"
            value={form.selectedPickupState}
            onChange={(event) =>
              setForm({ ...form, selectedPickupState: event.target.value })
            }
            required
          />
          <input
            placeholder="Pickup city"
            value={form.selectedPickupCity}
            onChange={(event) =>
              setForm({ ...form, selectedPickupCity: event.target.value })
            }
            required
          />
          <input
            placeholder="Drop state"
            value={form.selectedDropState}
            onChange={(event) =>
              setForm({ ...form, selectedDropState: event.target.value })
            }
            required
          />
          <input
            placeholder="Drop city"
            value={form.selectedDropCity}
            onChange={(event) =>
              setForm({ ...form, selectedDropCity: event.target.value })
            }
            required
          />
          <input
            type="date"
            value={form.pickupdate}
            onChange={(event) => setForm({ ...form, pickupdate: event.target.value })}
            required
          />
          <input
            type="time"
            value={form.pickuptime}
            onChange={(event) => setForm({ ...form, pickuptime: event.target.value })}
            required
          />
          <input
            type="date"
            value={form.dropdate}
            onChange={(event) => setForm({ ...form, dropdate: event.target.value })}
            required
          />
          <input
            type="time"
            value={form.droptime}
            onChange={(event) => setForm({ ...form, droptime: event.target.value })}
            required
          />
        </div>
        {message ? <p className="error-text">{message}</p> : null}
        <button className="primary-button" disabled={saving}>
          {saving ? "Confirming..." : "Confirm Booking"}
        </button>
      </form>
    </section>
  );
}

export default BookCab;

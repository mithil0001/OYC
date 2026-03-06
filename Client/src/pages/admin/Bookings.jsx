import { useEffect, useState } from "react";
import { oycApi } from "../../services/oycApi";

function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    oycApi.getBookings().then(setBookings);
  }, []);

  return (
    <section className="stack-page">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Live ledger</span>
          <h2>All bookings</h2>
        </div>
      </div>
      <div className="table-card">
        {bookings.map((booking) => (
          <article className="table-row" key={booking.id || booking._id}>
            <div>
              <strong>{booking.userName}</strong>
              <p>{booking.carname}</p>
            </div>
            <div>
              <p>
                {booking.selectedPickupCity} to {booking.selectedDropCity}
              </p>
              <span>{booking.pickupdate}</span>
            </div>
            <div>
              <strong>Rs. {booking.fare}</strong>
              <p>{booking.status || "Confirmed"}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Bookings;

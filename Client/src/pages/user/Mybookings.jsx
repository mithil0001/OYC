import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { oycApi } from "../../services/oycApi";

function Mybookings() {
  const { currentUser } = useAuth();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    oycApi.getUserBookings(currentUser.id || currentUser._id).then(setBookings);
  }, [currentUser]);

  return (
    <section className="stack-page">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Your activity</span>
          <h2>My bookings</h2>
        </div>
      </div>

      <div className="table-card">
        {bookings.length === 0 ? (
          <p className="muted-copy">No bookings yet.</p>
        ) : (
          <div className="booking-list">
            {bookings.map((booking) => (
              <article className="booking-card" key={booking.id || booking._id}>
                <div>
                  <h3>{booking.carname}</h3>
                  <p>
                    {booking.selectedPickupCity} to {booking.selectedDropCity}
                  </p>
                </div>
                <div>
                  <strong>{booking.pickupdate}</strong>
                  <p>{booking.pickuptime}</p>
                </div>
                <div>
                  <strong>Rs. {booking.fare}</strong>
                  <p>{booking.status || "Confirmed"}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Mybookings;

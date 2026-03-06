import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const heroSlides = [
  {
    id: 1,
    label: "City transfers",
    title: "Reliable rides for airport runs, office hops, and late-night pickups.",
    text: "Book polished city cabs with transparent pricing, clear driver details, and a dashboard that keeps every trip visible from request to drop-off.",
    stats: [
      { value: "4 min", label: "avg dispatch window" },
      { value: "120+", label: "active city routes" },
      { value: "Live", label: "driver visibility" },
    ],
  },
  {
    id: 2,
    label: "Outstation travel",
    title: "Long-distance booking with fleet-level control built in.",
    text: "Plan intercity rides, compare vehicle classes, and manage booking details without juggling spreadsheets, calls, or disconnected admin tools.",
    stats: [
      { value: "24/7", label: "trip monitoring" },
      { value: "SUV to EV", label: "fleet choice" },
      { value: "Instant", label: "booking confirmation" },
    ],
  },
  {
    id: 3,
    label: "Operator console",
    title: "Users, bookings, and cab management in one focused workspace.",
    text: "OYC combines a consumer booking flow with an operator-grade control room so the frontend already feels like a real product, not a classroom demo.",
    stats: [
      { value: "2-sided", label: "user + admin UX" },
      { value: "Single", label: "fleet overview" },
      { value: "API-ready", label: "frontend architecture" },
    ],
  },
];

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  const slide = heroSlides[activeSlide];

  return (
    <div className="marketing-page">
      <section className="hero-panel">
        <div className="hero-copy">
          <span className="eyebrow">{slide.label}</span>
          <h1>{slide.title}</h1>
          <p>{slide.text}</p>
          <div className="hero-actions">
            <Link className="primary-button" to="/register">
              Start as User
            </Link>
            <Link className="secondary-button" to="/admin/login">
              Admin Console
            </Link>
          </div>
          <div className="hero-dots" aria-label="Hero slides">
            {heroSlides.map((item, index) => (
              <button
                key={item.id}
                className={index === activeSlide ? "hero-dot active" : "hero-dot"}
                onClick={() => setActiveSlide(index)}
                type="button"
                aria-label={`Show slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="hero-carousel-card">
          <div className="hero-carousel-meta">
            <span className="pill">OYC showcase</span>
            <strong>Slide {activeSlide + 1}</strong>
          </div>
          <div className="hero-carousel-body">
            <h2>Own Your Cab</h2>
            <p>
              From first click to fleet oversight, the interface is designed to
              feel premium, fast, and operationally clear.
            </p>
          </div>
          <div className="hero-stats">
            {slide.stats.map((item) => (
              <article key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="story-band">
        <article className="story-card">
          <span className="eyebrow">For riders</span>
          <h2>Find the right ride class without friction.</h2>
          <p>
            Riders can move from discovery to booking quickly, with clearer cab
            classes, visual vehicle cards, and booking flows that keep route and
            trip timing information front and center.
          </p>
        </article>
        <article className="story-card">
          <span className="eyebrow">For admins</span>
          <h2>Operate the fleet with fewer blind spots.</h2>
          <p>
            Admin screens consolidate users, bookings, and cab inventory so
            operators can monitor demand, update vehicles, and maintain service
            quality from one dashboard.
          </p>
        </article>
      </section>

      <section className="feature-grid">
        <article className="feature-card">
          <span>01</span>
          <h2>Fast rider journeys</h2>
          <p>
            Search available cabs, compare vehicle formats, confirm a route,
            and revisit all booked rides from the user area.
          </p>
        </article>
        <article className="feature-card">
          <span>02</span>
          <h2>Built for operators</h2>
          <p>
            Track customers, bookings, and fleet inventory from a focused admin
            workspace with edit and management actions already wired.
          </p>
        </article>
        <article className="feature-card">
          <span>03</span>
          <h2>API-ready frontend</h2>
          <p>
            Axios-backed flows are in place, and the UI can still run against a
            local demo store while backend logic is being completed.
          </p>
        </article>
      </section>
    </div>
  );
}

export default Home;

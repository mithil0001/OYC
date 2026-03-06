import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { oycApi } from "../../services/oycApi";

function Alogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const { loginAdmin } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const admin = await oycApi.loginAdmin(form);
      loginAdmin(admin);
      navigate(location.state?.from?.pathname || "/a/home");
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Admin login failed");
    }
  };

  return (
    <div className="auth-page admin-auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <span className="eyebrow">Admin access</span>
        <h1>Control room sign-in.</h1>
        <input
          placeholder="Admin email"
          type="email"
          value={form.email}
          onChange={(event) => setForm({ ...form, email: event.target.value })}
          required
        />
        <input
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={(event) => setForm({ ...form, password: event.target.value })}
          required
        />
        {error ? <p className="error-text">{error}</p> : null}
        <button className="primary-button">Login</button>
        <p className="auth-switch">
          Need access? <Link to="/admin/register">Register admin</Link>
        </p>
      </form>
    </div>
  );
}

export default Alogin;

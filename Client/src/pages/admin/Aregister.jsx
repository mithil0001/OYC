import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { oycApi } from "../../services/oycApi";

function Aregister() {
  const navigate = useNavigate();
  const { loginAdmin } = useAuth();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const admin = await oycApi.registerAdmin(form);
      loginAdmin(admin);
      navigate("/a/home");
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Admin signup failed");
    }
  };

  return (
    <div className="auth-page admin-auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <span className="eyebrow">Admin onboarding</span>
        <h1>Create an operator account.</h1>
        <input
          placeholder="Admin name"
          value={form.name}
          onChange={(event) => setForm({ ...form, name: event.target.value })}
          required
        />
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
        <button className="primary-button">Create Admin</button>
        <p className="auth-switch">
          Already have access? <Link to="/admin/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Aregister;

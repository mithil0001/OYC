import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { oycApi } from "../../services/oycApi";

function UserEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", phone: "", city: "" });

  useEffect(() => {
    oycApi.getUserById(id).then((user) => {
      if (user) {
        setForm({
          name: user.name || "",
          email: user.email || "",
          phone: user.phone || "",
          city: user.city || "",
        });
      }
    });
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await oycApi.updateUser(id, form);
    navigate("/a/users");
  };

  return (
    <form className="editor-card" onSubmit={handleSubmit}>
      <h2>Edit user</h2>
      <div className="form-grid">
        <input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} />
        <input value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} />
        <input value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} />
        <input value={form.city} onChange={(event) => setForm({ ...form, city: event.target.value })} />
      </div>
      <button className="primary-button">Save user</button>
    </form>
  );
}

export default UserEdit;

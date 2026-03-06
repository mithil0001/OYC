import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { oycApi } from "../../services/oycApi";

function Users() {
  const [users, setUsers] = useState([]);

  const loadUsers = () => {
    oycApi.getUsers().then(setUsers);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleDelete = async (id) => {
    await oycApi.deleteUser(id);
    loadUsers();
  };

  return (
    <section className="stack-page">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Registry</span>
          <h2>Users</h2>
        </div>
      </div>

      <div className="table-card">
        {users.map((user) => (
          <article className="table-row" key={user.id || user._id}>
            <div>
              <strong>{user.name}</strong>
              <p>{user.email}</p>
            </div>
            <div>
              <p>{user.phone || "No phone"}</p>
              <span>{user.city || "No city"}</span>
            </div>
            <div className="row-actions">
              <Link className="secondary-button" to={`/a/users/${user.id || user._id}/edit`}>
                Edit
              </Link>
              <button className="ghost-button danger" onClick={() => handleDelete(user.id || user._id)}>
                Delete
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Users;

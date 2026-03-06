import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { oycApi } from "../../services/oycApi";

const initialForm = {
  drivername: "",
  carImage: "",
  carname: "",
  cartype: "",
  price: "",
  carno: "",
  seats: "",
  fuel: "",
};

function Addcar() {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await oycApi.addCar(form);
    navigate("/a/cabs");
  };

  return (
    <form className="editor-card" onSubmit={handleSubmit}>
      <h2>Add new cab</h2>
      <div className="form-grid">
        {Object.entries(form).map(([key, value]) => (
          <input
            key={key}
            placeholder={key}
            value={value}
            onChange={(event) => setForm({ ...form, [key]: event.target.value })}
            required={key !== "carImage"}
          />
        ))}
      </div>
      <button className="primary-button">Add cab</button>
    </form>
  );
}

export default Addcar;

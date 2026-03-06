import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { oycApi } from "../../services/oycApi";

function Acabedit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    drivername: "",
    carname: "",
    cartype: "",
    price: "",
    carno: "",
    seats: "",
    fuel: "",
    carImage: "",
  });

  useEffect(() => {
    oycApi.getCarById(id).then((car) => {
      if (car) {
        setForm({
          drivername: car.drivername || "",
          carname: car.carname || "",
          cartype: car.cartype || "",
          price: car.price || "",
          carno: car.carno || "",
          seats: car.seats || "",
          fuel: car.fuel || "",
          carImage: car.carImage || "",
        });
      }
    });
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await oycApi.updateCar(id, form);
    navigate("/a/cabs");
  };

  return (
    <form className="editor-card" onSubmit={handleSubmit}>
      <h2>Edit cab</h2>
      <div className="form-grid">
        {Object.entries(form).map(([key, value]) => (
          <input
            key={key}
            placeholder={key}
            value={value}
            onChange={(event) => setForm({ ...form, [key]: event.target.value })}
          />
        ))}
      </div>
      <button className="primary-button">Save cab</button>
    </form>
  );
}

export default Acabedit;

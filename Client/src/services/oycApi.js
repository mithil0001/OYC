import axios from "axios";
import {
  addCarDemo,
  createBookingDemo,
  deleteCarDemo,
  deleteUserDemo,
  getBookingsByUserDemo,
  getBookingsDemo,
  getCarByIdDemo,
  getCarsDemo,
  getUserByIdDemo,
  getUsersDemo,
  loginAdminDemo,
  loginUserDemo,
  registerAdminDemo,
  registerUserDemo,
  updateCarDemo,
  updateUserDemo,
} from "./demoStore";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8000/api",
});

function getStoredToken() {
  const userSession = localStorage.getItem("oyc_user_session");
  const adminSession = localStorage.getItem("oyc_admin_session");

  for (const raw of [adminSession, userSession]) {
    if (!raw) {
      continue;
    }

    try {
      const parsed = JSON.parse(raw);
      if (parsed?.token) {
        return parsed.token;
      }
    } catch {
      // Ignore malformed local storage.
    }
  }

  return null;
}

api.interceptors.request.use((config) => {
  const token = getStoredToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

async function attempt(request, fallback) {
  try {
    const response = await request();
    return response.data;
  } catch (error) {
    if (!error.response) {
      return fallback();
    }

    throw error;
  }
}

export const oycApi = {
  loginUser: (payload) =>
    attempt(
      () => api.post("/users/login", payload),
      () => loginUserDemo(payload.email, payload.password)
    ),
  registerUser: (payload) =>
    attempt(
      () => api.post("/users/register", payload),
      () => registerUserDemo(payload)
    ),
  loginAdmin: (payload) =>
    attempt(
      () => api.post("/admin/login", payload),
      () => loginAdminDemo(payload.email, payload.password)
    ),
  registerAdmin: (payload) =>
    attempt(
      () => api.post("/admin/register", payload),
      () => registerAdminDemo(payload)
    ),
  getCars: () => attempt(() => api.get("/cars"), () => getCarsDemo()),
  getCarById: (id) => attempt(() => api.get(`/cars/${id}`), () => getCarByIdDemo(id)),
  addCar: (payload) => attempt(() => api.post("/cars", payload), () => addCarDemo(payload)),
  updateCar: (id, payload) =>
    attempt(() => api.put(`/cars/${id}`, payload), () => updateCarDemo(id, payload)),
  deleteCar: (id) => attempt(() => api.delete(`/cars/${id}`), () => deleteCarDemo(id)),
  getUsers: () => attempt(() => api.get("/admin/users"), () => getUsersDemo()),
  getUserById: (id) =>
    attempt(() => api.get(`/admin/users/${id}`), () => getUserByIdDemo(id)),
  updateUser: (id, payload) =>
    attempt(() => api.put(`/admin/users/${id}`, payload), () => updateUserDemo(id, payload)),
  deleteUser: (id) =>
    attempt(() => api.delete(`/admin/users/${id}`), () => deleteUserDemo(id)),
  getBookings: () => attempt(() => api.get("/bookings"), () => getBookingsDemo()),
  getUserBookings: (userId) =>
    attempt(() => api.get(`/bookings/user/${userId}`), () => getBookingsByUserDemo(userId)),
  createBooking: (payload) =>
    attempt(() => api.post("/bookings", payload), () => createBookingDemo(payload)),
};

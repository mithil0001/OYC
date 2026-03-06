const STORAGE_KEY = "oyc_demo_store";

const seedData = {
  users: [
    {
      id: "u1",
      name: "Aarav Singh",
      email: "aarav@oyc.com",
      password: "123456",
      phone: "+91 98765 43210",
      city: "Bengaluru",
    },
    {
      id: "u2",
      name: "Mira Shah",
      email: "mira@oyc.com",
      password: "123456",
      phone: "+91 91234 56780",
      city: "Mumbai",
    },
  ],
  admins: [
    {
      id: "a1",
      name: "Fleet Control",
      email: "admin@oyc.com",
      password: "123456",
    },
  ],
  cars: [
    {
      id: "c1",
      drivername: "Rahul Verma",
      carImage:
        "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=80",
      carname: "Hyundai Aura",
      cartype: "Sedan",
      price: "18",
      carno: "KA01AB2456",
      seats: 4,
      fuel: "CNG",
      transmission: "Automatic",
      bestFor: "Airport and office travel",
      imagePosition: "center 68%",
      description:
        "Balanced sedan for smooth city runs, business pickups, and efficient airport transfers.",
      status: "Available",
    },
    {
      id: "c2",
      drivername: "Neha Batra",
      carImage:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
      carname: "Toyota Innova",
      cartype: "SUV",
      price: "24",
      carno: "MH02CD1122",
      seats: 6,
      fuel: "Diesel",
      transmission: "Manual",
      bestFor: "Family and outstation trips",
      imagePosition: "center 60%",
      description:
        "Spacious people-mover built for family luggage, intercity routes, and group bookings.",
      status: "Available",
    },
    {
      id: "c3",
      drivername: "Imran Khan",
      carImage:
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=900&q=80",
      carname: "Tata Tiago EV",
      cartype: "Electric",
      price: "16",
      carno: "DL08EF7788",
      seats: 4,
      fuel: "EV",
      transmission: "Automatic",
      bestFor: "Silent city rides",
      imagePosition: "center 58%",
      description:
        "Quiet electric hatchback for daily urban travel, short hops, and cleaner mobility.",
      status: "Available",
    },
    {
      id: "c4",
      drivername: "Pooja Nair",
      carImage:
        "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=900&q=80",
      carname: "Maruti Ertiga",
      cartype: "MPV",
      price: "21",
      carno: "KL07GH4412",
      seats: 7,
      fuel: "Petrol",
      transmission: "Manual",
      bestFor: "Family airport transfers",
      imagePosition: "center 62%",
      description:
        "Flexible 7-seater for larger groups that need extra room without moving into full-size SUV pricing.",
      status: "Available",
    },
    {
      id: "c5",
      drivername: "Samarjeet Roy",
      carImage:
        "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=900&q=80",
      carname: "Honda City",
      cartype: "Premium Sedan",
      price: "26",
      carno: "WB20JK9011",
      seats: 4,
      fuel: "Petrol",
      transmission: "Automatic",
      bestFor: "Executive commutes",
      imagePosition: "center 64%",
      description:
        "Refined sedan for corporate movement, client pickups, and comfort-first business bookings.",
      status: "Available",
    },
    {
      id: "c6",
      drivername: "Farhan Ali",
      carImage:
        "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=80",
      carname: "Mahindra XUV700",
      cartype: "SUV",
      price: "30",
      carno: "UP32LM5544",
      seats: 6,
      fuel: "Diesel",
      transmission: "Automatic",
      bestFor: "Highway comfort",
      imagePosition: "center 56%",
      description:
        "Premium SUV suited for longer drives, mixed-road terrain, and luggage-heavy itineraries.",
      status: "Available",
    },
    {
      id: "c7",
      drivername: "Kritika Das",
      carImage:
        "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=900&q=80",
      carname: "MG ZS EV",
      cartype: "Electric SUV",
      price: "28",
      carno: "TS09NP3310",
      seats: 5,
      fuel: "EV",
      transmission: "Automatic",
      bestFor: "Premium eco travel",
      imagePosition: "center 52%",
      description:
        "Electric SUV for riders who want premium cabin comfort with a cleaner powertrain.",
      status: "Available",
    },
    {
      id: "c8",
      drivername: "Dev Malhotra",
      carImage:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
      carname: "Kia Carens",
      cartype: "Tourer",
      price: "23",
      carno: "HR26QR8080",
      seats: 6,
      fuel: "Diesel",
      transmission: "Manual",
      bestFor: "Weekend group runs",
      imagePosition: "center 60%",
      description:
        "Touring-focused cabin with balanced comfort, flexible seats, and enough space for weekend plans.",
      status: "Available",
    },
  ],
  bookings: [
    {
      id: "b1",
      selectedPickupState: "Karnataka",
      selectedPickupCity: "Bengaluru",
      selectedDropState: "Tamil Nadu",
      selectedDropCity: "Chennai",
      pickupdate: "2026-03-12",
      pickuptime: "09:00",
      dropdate: "2026-03-12",
      droptime: "16:00",
      drivername: "Rahul Verma",
      fare: "5400",
      carname: "Hyundai Aura",
      cartype: "Sedan",
      carno: "KA01AB2456",
      price: "18",
      userId: "u1",
      userName: "Aarav Singh",
      bookeddate: "06/03/2026",
      status: "Confirmed",
    },
  ],
};

function uid(prefix) {
  return `${prefix}-${Math.random().toString(36).slice(2, 9)}`;
}

function readStore() {
  const raw = localStorage.getItem(STORAGE_KEY);

  if (!raw) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seedData));
    return structuredClone(seedData);
  }

  try {
    return JSON.parse(raw);
  } catch {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seedData));
    return structuredClone(seedData);
  }
}

function writeStore(store) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  return store;
}

export function loginUserDemo(email, password) {
  const store = readStore();
  const user = store.users.find((item) => item.email === email && item.password === password);

  if (!user) {
    throw new Error("Invalid user credentials");
  }

  return { ...user };
}

export function registerUserDemo(payload) {
  const store = readStore();

  if (store.users.some((item) => item.email === payload.email)) {
    throw new Error("User already exists");
  }

  const newUser = { id: uid("u"), ...payload };
  store.users.push(newUser);
  writeStore(store);
  return { ...newUser };
}

export function loginAdminDemo(email, password) {
  const store = readStore();
  const admin = store.admins.find((item) => item.email === email && item.password === password);

  if (!admin) {
    throw new Error("Invalid admin credentials");
  }

  return { ...admin };
}

export function registerAdminDemo(payload) {
  const store = readStore();

  if (store.admins.some((item) => item.email === payload.email)) {
    throw new Error("Admin already exists");
  }

  const newAdmin = { id: uid("a"), ...payload };
  store.admins.push(newAdmin);
  writeStore(store);
  return { ...newAdmin };
}

export function getCarsDemo() {
  return readStore().cars;
}

export function getCarByIdDemo(id) {
  return readStore().cars.find((item) => item.id === id);
}

export function addCarDemo(payload) {
  const store = readStore();
  const newCar = {
    id: uid("c"),
    status: "Available",
    seats: Number(payload.seats) || 4,
    ...payload,
  };
  store.cars.unshift(newCar);
  writeStore(store);
  return newCar;
}

export function updateCarDemo(id, payload) {
  const store = readStore();
  store.cars = store.cars.map((item) => (item.id === id ? { ...item, ...payload } : item));
  writeStore(store);
  return store.cars.find((item) => item.id === id);
}

export function deleteCarDemo(id) {
  const store = readStore();
  store.cars = store.cars.filter((item) => item.id !== id);
  writeStore(store);
}

export function getUsersDemo() {
  return readStore().users;
}

export function getUserByIdDemo(id) {
  return readStore().users.find((item) => item.id === id);
}

export function updateUserDemo(id, payload) {
  const store = readStore();
  store.users = store.users.map((item) => (item.id === id ? { ...item, ...payload } : item));
  writeStore(store);
  return store.users.find((item) => item.id === id);
}

export function deleteUserDemo(id) {
  const store = readStore();
  store.users = store.users.filter((item) => item.id !== id);
  store.bookings = store.bookings.filter((item) => item.userId !== id);
  writeStore(store);
}

export function getBookingsDemo() {
  return readStore().bookings;
}

export function getBookingsByUserDemo(userId) {
  return readStore().bookings.filter((item) => item.userId === userId);
}

export function createBookingDemo(payload) {
  const store = readStore();
  const booking = {
    id: uid("b"),
    status: "Confirmed",
    bookeddate: new Date().toLocaleDateString("en-GB"),
    ...payload,
  };
  store.bookings.unshift(booking);
  writeStore(store);
  return booking;
}

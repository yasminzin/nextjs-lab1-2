const sql = require("better-sqlite3");
const uuidv4 = require("uuid").v4;
const path = require("path");

const dbPath = path.join(__dirname, "car-agency.db");
// console.log("Using DB file:", dbPath);
const db = sql(dbPath);

const CARS = [
  {
    id: uuidv4(),
    name: "Toyota Corolla",
    description: "Reliable and fuel-efficient sedan with advanced safety features.",
    model: "Corolla SE",
    year: 2022,
    price: 21000,
    color: "White",
    fuelType: "Petrol",
    transmission: "Automatic",
    image: "/images/cars/toyota-corolla.jpg",
  },
  {
    id: uuidv4(),
    name: "Tesla Model 3",
    description: "Electric sedan with cutting-edge technology and autopilot features.",
    model: "Model 3 Long Range",
    year: 2023,
    price: 45000,
    color: "Midnight Silver",
    fuelType: "Electric",
    transmission: "Automatic",
    image: "/images/cars/tesla-model3.jpg",
  },
  {
    id: uuidv4(),
    name: "Ford Mustang",
    description: "Sporty coupe with iconic design and powerful V8 engine.",
    model: "Mustang GT",
    year: 2021,
    price: 38000,
    color: "Red",
    fuelType: "Petrol",
    transmission: "Manual",
    image: "/images/cars/ford-mustang.jpg",
  },
  {
    id: uuidv4(),
    name: "BMW X5",
    description: "Luxury SUV with performance, comfort, and cutting-edge features.",
    model: "X5 xDrive40i",
    year: 2022,
    price: 60000,
    color: "Black",
    fuelType: "Diesel",
    transmission: "Automatic",
    image: "/images/cars/bmw-x5.jpg",
  },
  {
    id: uuidv4(),
    name: "Hyundai Elantra",
    description: "Compact sedan with stylish design and excellent fuel economy.",
    model: "Elantra SEL",
    year: 2020,
    price: 17000,
    color: "Blue",
    fuelType: "Petrol",
    transmission: "Automatic",
    image: "/images/cars/hyundai-elantra.jpg",
  },
  {
    id: uuidv4(),
    name: "Audi Q7",
    description: "Premium 7-seater SUV with advanced safety and entertainment systems.",
    model: "Q7 Premium Plus",
    year: 2023,
    price: 68000,
    color: "Gray",
    fuelType: "Diesel",
    transmission: "Automatic",
    image: "/images/cars/audi-q7.jpg",
  },
  // {
  //   id: uuidv4(),
  //   name: "Honda Civic",
  //   description: "Sleek and sporty compact car with great fuel efficiency.",
  //   model: "Civic Sport",
  //   year: 2021,
  //   price: 22000,
  //   color: "Silver",
  //   fuelType: "Petrol",
  //   transmission: "Manual",
  //   image: "/images/cars/honda-civic.jpg",
  // },
  // {
  //   id: uuidv4(),
  //   name: "Mercedes-Benz C-Class",
  //   description: "Elegant luxury sedan with smooth ride and high-end interior.",
  //   model: "C300 AMG Line",
  //   year: 2022,
  //   price: 52000,
  //   color: "Black",
  //   fuelType: "Petrol",
  //   transmission: "Automatic",
  //   image: "/images/cars/mercedes-cclass.jpg",
  // },
];

const users = [
  {
    id: uuidv4(),
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    location: "New York, USA",
    joined: "2023-04-15",
    phone: "+1-212-555-0198",
  },
  {
    id: uuidv4(),
    name: "Mohamed Hassan",
    email: "mohamed.hassan@example.com",
    location: "Cairo, Egypt",
    joined: "2022-11-20",
    phone: "+20-100-555-3322",
  },
  {
    id: uuidv4(),
    name: "Sophia Müller",
    email: "sophia.mueller@example.de",
    location: "Berlin, Germany",
    joined: "2023-01-03",
    phone: "+49-30-1234567",
  },
  {
    id: uuidv4(),
    name: "Carlos Alvarez",
    email: "carlos.alvarez@example.mx",
    location: "Mexico City, Mexico",
    joined: "2023-06-10",
    phone: "+52-55-1234-5678",
  },
  {
    id: uuidv4(),
    name: "Yuki Tanaka",
    email: "yuki.tanaka@example.jp",
    location: "Tokyo, Japan",
    joined: "2022-09-01",
    phone: "+81-3-1234-5678",
  },
];

db.prepare(
  "CREATE TABLE IF NOT EXISTS cars (id TEXT PRIMARY KEY, name TEXT, description TEXT, model TEXT, year INTEGER, price REAL, color TEXT, fuelType TEXT, transmission TEXT, image TEXT)"
).run();

db.prepare("CREATE TABLE IF NOT EXISTS users (id TEXT PRIMARY KEY, name TEXT, email TEXT, location TEXT, joined TEXT, phone TEXT)").run();

function initData() {
  db.prepare("DELETE FROM users").run();
  const insertUserStatement = db.prepare("INSERT INTO users VALUES (@id, @name, @email, @location, @joined, @phone)");
  try {
    for (const user of users) {
      insertUserStatement.run(user);
      console.log("Inserted user:", user.name);
    }
  } catch (error) {
    console.error("Failed to insert user:", error);
    console.error(error.message);
  }
  
  db.prepare("DELETE FROM cars").run();
  const insertCarStatement = db.prepare(
    "INSERT INTO cars VALUES (@id, @name, @description, @model, @year, @price, @color, @fuelType, @transmission, @image)"
  );
  try {
    for (const car of CARS) {
      insertCarStatement.run(car);
      console.log("Inserted:", car.name);
    }
  } catch (error) {
    console.error("Failed to insert car:", error);
    console.error(error.message);
  }
}

initData();

// const count = db.prepare("SELECT COUNT(*) as count FROM cars").get().count;
// console.log("Total cars in DB:", count);

// const allCars = db.prepare("SELECT * FROM cars").all();
// console.table(allCars);

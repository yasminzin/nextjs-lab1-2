const sql = require("better-sqlite3");
const path = require("path");
const dbPath = path.join(process.cwd(), "src", "app", "data", "car-agency.db");
// console.log(dbPath)
const db = sql(dbPath);

export function getCars() {
  const cars = db.prepare("SELECT * FROM cars").all();
  // console.table(cars);
  return cars;
}

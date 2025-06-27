const sql = require("better-sqlite3");
const path = require("path");
const dbPath = path.join(process.cwd(), "src", "app", "data", "car-agency.db");
// console.log(dbPath)
const db = sql(dbPath);

export function getUser() {
  const user = db.prepare("SELECT * FROM users WHERE id = '4c813eaf-b1c3-41a9-8f0d-f837dafbbd91'").get();
  console.log(user)
  return user;
}

export function editUser(user) {
  console.log(user);
  const { name, email, location, phone } = user;
  const result = db.prepare(
    `
  UPDATE users 
  SET name = ?, email = ?, location = ?, phone = ?
  WHERE id = '4c813eaf-b1c3-41a9-8f0d-f837dafbbd91'
`
  ).run(name, email, location, phone);

  console.log(result)
}

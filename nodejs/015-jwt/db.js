const pg = require("pg-promise")();
const db = pg("postgresql://postgres:781379@localhost:5432/users");

const setupdb = async function () {
  let users = await db.none(`DROP TABLE IF EXISTS users;
  
    CREATE TABLE users (
      id SERIAL NOT NULL PRIMARY KEY,
      username TEXT NOT NULL,
      password TEXT NOT NULL,
      token TEXT
    );
    `);
  await db.none(`INSERT INTO users(username,password) VALUES ($1,$2)`, [
    "Hakan",
    "781379",
  ]);
};
setupdb();
module.exports = db;

const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const { open } = require('sqlite');

let db;

(async () => {
  db = await open({
    filename: path.join(__dirname, 'users.db'),
    driver: sqlite3.Database,
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL
    )
  `);

  console.log('Database & users table ready!');
})();

module.exports = () => db;

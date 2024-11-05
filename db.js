/** Database for lunchly */

const pg = require("pg");

// const db = new pg.Client("postgresql:///lunchly");

if (process.env.NODE_ENV === "test") {
  DB_URI = "postgresql://tkaufman:tyson123@127.0.0.1:5432/lunchly";
} else {
  DB_URI = "postgresql://tkaufman:tyson123@127.0.0.1:5432/lunchly";
}

const db = new pg.Client({
  connectionString: DB_URI,
});

db.connect();

module.exports = db;

// db.js
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: "localhost:3306",
  user: "root",
  password: "ujjwalbhau",
  database: "SchoolData",
});

export default pool;

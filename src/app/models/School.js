// models/School.js
import pool from './../../../db/db';

const School = {
  getAll: async () => {
    const [rows] = await pool.query('SELECT name, address, city, image FROM schools');
    return rows;
  },
  create: async (schoolData) => {
    const [result] = await pool.query('INSERT INTO schools SET ?', schoolData);
    return result.insertId;
  },
};

export default School;

const { Client } = require("pg");

const connectionString = process.env.DATABASE_URL || "https://postgres:password@localhost:5432/gamestore";

const client = new Client({
  connectionString,
  user:"postgres",
  password:'',
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined,
});


module.exports = client;

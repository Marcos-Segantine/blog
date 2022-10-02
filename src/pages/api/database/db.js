import mysql from "mysql2";

const db = mysql.createConnection(process.env.DATABASE_URL);

export default db;

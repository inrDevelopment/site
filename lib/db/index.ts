import mysql from "mysql2/promise";

export const pool = mysql.createPool({
  uri: process.env.DATABASE_URL,
  connectionLimit: 10,
});
if (process.env.NODE_ENV !== "production") {
  global.pgPool = pool;
}

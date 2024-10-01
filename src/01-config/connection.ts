import mysql from 'mysql2/promise'

export default async () => {
  const conn = await mysql.createConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  })
  return conn
}

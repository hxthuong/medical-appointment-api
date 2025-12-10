const sql = require("mssql");
require("dotenv").config();

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  port: parseInt(process.env.DB_PORT),
  options: {
    encrypt: false, // Nếu dùng Azure thì đặt true
    trustServerCertificate: true,
  },
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
};

async function connect() {
  try {
    await sql.connect(config);
    console.log("✅ Connected to SQL Server database");
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    process.exit(1);
  }
}

module.exports = { sql, connect };

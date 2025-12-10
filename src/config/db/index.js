const sql = require("mssql");
require("dotenv").config();

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  port: parseInt(process.env.DB_PORT),
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
};

// Tạo pool toàn cục
const pool = new sql.ConnectionPool(config);
const poolConnect = pool.connect();

pool.on("error", (err) => {
  console.error("Unexpected SQL error", err);
});

async function connect() {
  await poolConnect;
  console.log("✅ Connected to SQL Server database (pool)");
}

// Hàm gọi stored procedure an toàn
async function executeStoredProcedure(procName, inputParams = {}) {
  await poolConnect;
  try {
    const request = pool.request();
    for (const key in inputParams) {
      const { type, value } = inputParams[key];
      request.input(key, type, value);
    }
    const result = await request.execute(procName);
    return result.recordset;
  } catch (err) {
    console.error("Stored Procedure Error:", err);
    throw err;
  }
}

module.exports = { sql, connect, executeStoredProcedure };

const { sql } = require("../../config/db");
const getSQLType = require("../../utils/GetSQLType");

class BaseModel {
  constructor(schema) {
    this.schema = schema; //truyền schema cụ thể khi khởi tạo
  }

  async excuteSP(spName, data, isArray) {
    try {
      const request = new sql.Request();

      for (const key in this.schema) {
        if (this.schema[key]) {
          const field = this.schema[key];
          let value = data[key] ?? field.default ?? null;

          // Nếu giá trị là string "null" hoặc "undefined" thì convert thành null
          if (value === "null" || value === "undefined" || value === "") {
            value = null;
          }

          const type = getSQLType(field.type, field.length);

          request.input(key, type, value);
        }
      }

      const result = await request.execute(spName);

      return isArray ? result.recordset || [] : result.recordset?.[0] || null;
    } catch (err) {
      throw new Error(`Stored Procedure "${spName}" failed: ${err.message}`);
    }
  }
}

module.exports = BaseModel;

const { sql } = require("../config/db");

function GetSQLType(type, length) {
  if (!type) throw new Error("Missing SQL type");

  switch (type.toLowerCase()) {
    case "uniqueidentifier":
      return sql.UniqueIdentifier;
    case "nvarchar":
      return sql.NVarChar(length || sql.MAX);
    case "varchar":
      return length ? sql.VarChar(length) : sql.VarChar;
    case "datetime":
      return sql.DateTime;
    case "float":
      return sql.Float;
    case "int":
      return sql.Int;
    case "smallint":
      return sql.SmallInt;
    case "datetime":
      return sql.DateTime;
    case "bit":
    case "bool":
      return sql.Bit;
    case "time":
      return sql.Time;
    default:
      return sql.NVarChar; // fallback
  }
}

module.exports = GetSQLType;

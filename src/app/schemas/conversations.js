const filterSchema = {
  ID: { type: "uniqueidentifier", default: null },
  Keyword: { type: "nvarchar", length: 1000, default: null },
};

const addSchema = {
  Name: { type: "nvarchar", length: 200, default: null },
  Description: { type: "nvarchar", length: 1000, default: null },
  Type: { type: "nvarchar", length: 20, default: null },
};

const deleteSchema = {
  ID: { type: "uniqueidentifier", required: true },
};

module.exports = { filterSchema, addSchema, deleteSchema };

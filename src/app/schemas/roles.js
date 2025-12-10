const filterSchema = {
  ID: { type: "int", default: 0 },
  Keyword: { type: "nvarchar", length: 1000, default: null },
  // Permissions: { type: 'nvarchar', length: 255, default: null },
};

const addSchema = {
  RoleName: { type: "nvarchar", length: 50, required: true },
  Description: { type: "nvarchar", length: 200, default: null },
  Permissions: { type: "nvarchar", length: 255, default: null },
};

const editSchema = {
  ID: { type: "int", required: true },
  RoleName: { type: "nvarchar", length: 50, required: true },
  Description: { type: "nvarchar", length: 200, default: null },
  Permissions: { type: "nvarchar", length: 255, default: null },
};

const deleteSchema = {
  ID: { type: "int", required: true },
};

module.exports = {
  filterSchema,
  addSchema,
  editSchema,
  deleteSchema,
};

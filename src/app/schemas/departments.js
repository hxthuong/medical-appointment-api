const filterSchema = {
  ID: { type: "uniqueidentifier", default: null },
  Keyword: { type: "nvarchar", length: 1000, default: null },
};

const addSchema = {
  HospitalID: { type: "uniqueidentifier", required: true },
  DepartmentName: { type: "nvarchar", length: 100, required: true },
  Description: { type: "nvarchar", length: 300, default: null },
  Images: { type: "nvarchar", length: 255, default: null },
};

const editSchema = {
  ID: { type: "uniqueidentifier", required: true },
  HospitalID: { type: "uniqueidentifier", required: true },
  DepartmentName: { type: "nvarchar", length: 100, required: true },
  Description: { type: "nvarchar", length: 300, default: null },
  Images: { type: "nvarchar", length: 255, default: null },
};

const deleteSchema = {
  ID: { type: "uniqueidentifier", required: true },
};

module.exports = { filterSchema, addSchema, editSchema, deleteSchema };

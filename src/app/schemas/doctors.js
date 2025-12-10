const filterSchema = {
  ID: { type: "uniqueidentifier", default: null },
  Keyword: { type: "nvarchar", length: 1000, default: null },
  HospitalID: { type: "uniqueidentifier", default: null },
  DepartmentID: { type: "uniqueidentifier", default: null },
};

const addSchema = {
  UserID: { type: "uniqueidentifier", required: true },
  HospitalID: { type: "uniqueidentifier", required: true },
  DepartmentID: { type: "uniqueidentifier", required: true },
  Specialization: { type: "nvarchar", length: 100, default: null },
  YearsOfExperience: { type: "int", default: null },
  IsAvailable: { type: "bit", default: 1 },
};

const editSchema = {
  ID: { type: "uniqueidentifier", primary: true },
  UserID: { type: "uniqueidentifier", required: true },
  HospitalID: { type: "uniqueidentifier", required: true },
  DepartmentID: { type: "uniqueidentifier", required: true },
  Specialization: { type: "nvarchar", length: 100, default: null },
  YearsOfExperience: { type: "int", default: null },
  IsAvailable: { type: "bit", default: 1 },
};

const deleteSchema = {
  ID: { type: "uniqueidentifier", required: true },
};

module.exports = { filterSchema, addSchema, editSchema, deleteSchema };

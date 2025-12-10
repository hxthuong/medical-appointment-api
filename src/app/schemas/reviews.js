const filterSchema = {
  ID: { type: "uniqueidentifier", default: null },
  HospitalID: { type: "uniqueidentifier", default: null },
  Rating: { type: "int", default: null },
};

const addSchema = {
  AppointmentID: { type: "uniqueidentifier", required: true },
  UserID: { type: "uniqueidentifier", required: true },
  HospitalID: { type: "uniqueidentifier", required: true },
  Rating: { type: "int", check: "BETWEEN 1 AND 5" },
  Comment: { type: "nvarchar", length: 1000, default: null },
};

const deleteSchema = {
  ID: { type: "uniqueidentifier", required: true },
};

module.exports = { filterSchema, addSchema, deleteSchema };

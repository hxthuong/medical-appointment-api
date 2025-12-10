const filterSchema = {
  ID: { type: "uniqueidentifier", default: null },
  AppointmentID: { type: "uniqueidentifier", default: null },
  UserID: { type: "uniqueidentifier", default: null },
};

const addSchema = {
  AppointmentID: { type: "uniqueidentifier", required: true },
  UserID: { type: "uniqueidentifier", default: null },
  DoctorID: { type: "uniqueidentifier", default: null },
  TestName: { type: "nvarchar", length: 200, required: true },
  Notes: { type: "nvarchar", length: 500, default: null },
};

const editSchema = {
  ID: { type: "uniqueidentifier", primary: true },
  AppointmentID: { type: "uniqueidentifier", required: true },
  UserID: { type: "uniqueidentifier", default: null },
  DoctorID: { type: "uniqueidentifier", default: null },
  TestName: { type: "nvarchar", length: 200, required: true },
  ResultDate: { type: "datetime", default: null },
  Notes: { type: "nvarchar", length: 500, default: null },
};

const deleteSchema = {
  ID: { type: "uniqueidentifier", required: true },
};

module.exports = { filterSchema, addSchema, editSchema, deleteSchema };

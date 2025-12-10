const filterSchema = {
  ID: { type: "uniqueidentifier", default: null },
  Keyword: { type: "nvarchar", length: 1000, default: null },
  HospitalID: { type: "uniqueidentifier", default: null },
  UserID: { type: "uniqueidentifier", default: null },
  AppointmentType: { type: "nvarchar", length: 50, default: null },
};

const addSchema = {
  UserID: { type: "uniqueidentifier", required: true },
  DoctorID: { type: "uniqueidentifier", default: null },
  ServiceID: { type: "uniqueidentifier", required: true },
  HospitalID: { type: "uniqueidentifier", default: null },
  AppointmentType: { type: "nvarchar", length: 50, default: null },
  AppointmentDate: { type: "date", required: true },
  AppointmentTime: { type: "time", required: true },
};

const editSchema = {
  ID: { type: "uniqueidentifier", primary: true },
  UserID: { type: "uniqueidentifier", required: true },
  DoctorID: { type: "uniqueidentifier", default: null },
  ServiceID: { type: "uniqueidentifier", required: true },
  HospitalID: { type: "uniqueidentifier", required: true },
  AppointmentType: { type: "nvarchar", length: 50, default: null },
  AppointmentDate: { type: "date", required: true },
  AppointmentTime: { type: "time", required: true },
  Status: { type: "nvarchar", length: 50, default: "pending" },
};

const deleteSchema = {
  ID: { type: "uniqueidentifier", required: true },
};

module.exports = { filterSchema, addSchema, editSchema, deleteSchema };

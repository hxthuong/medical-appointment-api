const filterSchema = {
  ID: { type: "uniqueidentifier", default: null },
  UserID: { type: "uniqueidentifier", default: null },
  AppointmentID: { type: "uniqueidentifier", default: null },
  PaymentStatus: { type: "nvarchar", length: 50, default: null },
};

const addSchema = {
  AppointmentID: { type: "uniqueidentifier", required: true },
  UserID: { type: "uniqueidentifier", required: true },
  Amount: { type: "decimal", precision: 12, scale: 2, required: true },
  PaymentMethod: { type: "nvarchar", length: 50, default: null },
  PaymentStatus: { type: "nvarchar", length: 50, default: "pending" },
  TransactionCode: { type: "nvarchar", length: 100, default: null },
  ParentPaymentID: { type: "uniqueidentifier", default: null },
};

const deleteSchema = {
  ID: { type: "uniqueidentifier", required: true },
};

module.exports = { filterSchema, addSchema, deleteSchema };

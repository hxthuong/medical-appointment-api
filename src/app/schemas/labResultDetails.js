const filterSchema = {
  ID: { type: "uniqueidentifier", default: null },
  LabResultID: { type: "uniqueidentifier", default: null },
};

const addSchema = {
  LabResultID: { type: "uniqueidentifier", required: true },
  ParameterName: { type: "nvarchar", length: 200, required: true },
  ResultValue: { type: "nvarchar", length: 100, default: null },
  Unit: { type: "nvarchar", length: 50, default: null },
  ReferenceRange: { type: "nvarchar", length: 100, default: null },
  Status: { type: "nvarchar", length: 50, default: null },
  Notes: { type: "nvarchar", length: 255, default: null },
};

const editSchema = {
  ID: { type: "uniqueidentifier", primary: true },
  LabResultID: { type: "uniqueidentifier", required: true },
  ParameterName: { type: "nvarchar", length: 200, required: true },
  ResultValue: { type: "nvarchar", length: 100, default: null },
  Unit: { type: "nvarchar", length: 50, default: null },
  ReferenceRange: { type: "nvarchar", length: 100, default: null },
  Status: { type: "nvarchar", length: 50, default: null },
  Notes: { type: "nvarchar", length: 255, default: null },
};

const deleteSchema = {
  ID: { type: "uniqueidentifier", required: true },
};

module.exports = { filterSchema, addSchema, editSchema, deleteSchema };

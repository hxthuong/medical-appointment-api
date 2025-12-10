const filterSchema = {
  ID: { type: "uniqueidentifier", default: null },
  Keyword: { type: "nvarchar", length: 1000, default: null },
  // Price: { type: "decimal", precision: 12, scale: 2, default: null },
  HospitalID: { type: "uniqueidentifier", default: null },
  DepartmentID: { type: "uniqueidentifier", default: null },
  ServiceType: { type: "nvarchar", length: 50, default: null },
};

const addSchema = {
  HospitalID: { type: "uniqueidentifier", default: null },
  DepartmentID: { type: "uniqueidentifier", default: null },
  ServiceName: { type: "nvarchar", length: 150, required: true },
  ServiceType: { type: "nvarchar", length: 50, default: null },
  ServiceIcon: { type: "nvarchar", length: 255, default: null },
  Description: { type: "nvarchar", length: 500, default: null },
  PriceFrom: { type: "decimal", precision: 12, scale: 2, required: true },
  PriceTo: { type: "decimal", precision: 12, scale: 2, required: true },
  DurationMinutes: { type: "int", default: null },
  ParentID: { type: "uniqueidentifier", default: null },
};

const editSchema = {
  ID: { type: "uniqueidentifier", primary: true },
  HospitalID: { type: "uniqueidentifier", default: null },
  DepartmentID: { type: "uniqueidentifier", default: null },
  ServiceName: { type: "nvarchar", length: 150, required: true },
  ServiceType: { type: "nvarchar", length: 50, default: null },
  ServiceIcon: { type: "nvarchar", length: 255, default: null },
  Description: { type: "nvarchar", length: 500, default: null },
  PriceFrom: { type: "decimal", precision: 12, scale: 2, required: true },
  PriceTo: { type: "decimal", precision: 12, scale: 2, required: true },
  DurationMinutes: { type: "int", default: null },
  IsActive: { type: "bit", default: 1 },
  ParentID: { type: "uniqueidentifier", default: null },
};

const deleteSchema = {
  ID: { type: "uniqueidentifier", required: true },
};

module.exports = { filterSchema, addSchema, editSchema, deleteSchema };

const filterSchema = {
  ID: { type: "uniqueidentifier", default: null },
  Keyword: { type: "nvarchar", length: 1000, default: null },
  IsActive: { type: "bit", default: null },
};

const addSchema = {
  Name: { type: "nvarchar", length: 150, required: true },
  Address: { type: "nvarchar", length: 255, default: null },
  Phone: { type: "nvarchar", length: 20, default: null },
  Email: { type: "nvarchar", length: 100, default: null },
  Description: { type: "nvarchar", length: 4000, default: null },
  Images: { type: "nvarchar", length: 255, default: null },
  Acreage: { type: "nvarchar", length: 255, default: null },
};

const editSchema = {
  ID: { type: "uniqueidentifier", primary: true },
  Name: { type: "nvarchar", length: 150, required: true },
  Address: { type: "nvarchar", length: 255, default: null },
  Phone: { type: "nvarchar", length: 20, default: null },
  Email: { type: "nvarchar", length: 100, default: null },
  Description: { type: "nvarchar", length: 4000, default: null },
  Images: { type: "nvarchar", length: 255, default: null },
  Acreage: { type: "nvarchar", length: 255, default: null },
  Rooms: { type: "int", default: 0 },
  IsActive: { type: "bit", default: 1 },
  Rating: { type: "decimal", precision: 3, scale: 2, default: 0 },
};

const deleteSchema = {
  ID: { type: "uniqueidentifier", required: true },
};

module.exports = { filterSchema, addSchema, editSchema, deleteSchema };

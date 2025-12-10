const filterSchema = {
  ID: { type: "uniqueidentifier", default: null },
  Keyword: { type: "nvarchar", length: 1000, default: null },
  ReferenceID: { type: "uniqueidentifier", default: null },
};

const addSchema = {
  FileName: { type: "nvarchar", length: 1000, required: true },
  FileType: { type: "nvarchar", length: 255, default: null },
  FileSize: { type: "bigint", default: null },
  FilePath: { type: "nvarchar", length: 1000, required: true },
  ReferenceID: { type: "uniqueidentifier", default: null },
  TableName: { type: "varchar", length: 255, default: null },
};

const deleteSchema = {
  ID: { type: "uniqueidentifier", default: null },
  ReferenceID: { type: "uniqueidentifier", default: null },
};

module.exports = { filterSchema, addSchema, deleteSchema };

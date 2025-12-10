const filterSchema = {
  ID: { type: "uniqueidentifier", default: null },
  Keyword: { type: "nvarchar", length: 1000, default: null },
  RoleID: { type: "int", default: null },
  IsDependent: { type: "bit", default: null },
  ParentID: { type: "uniqueidentifier", default: null },
  IsLogin: { type: "bit", default: null },
};

const addSchema = {
  Username: { type: "varchar", length: 100, required: true },
  FullName: { type: "nvarchar", length: 100, required: true },
  Email: { type: "nvarchar", length: 100, unique: true, required: true },
  Phone: { type: "nvarchar", length: 20, default: null },
  Password: { type: "nvarchar", length: 255, default: null },
  RoleID: { type: "int", required: true },
  Gender: { type: "nvarchar", length: 10, default: null },
  DateOfBirth: { type: "date", default: null },
  Address: { type: "nvarchar", length: 255, default: null },
  Avatar: { type: "nvarchar", length: 255, default: null },
  IsDependent: { type: "bit", default: 0 }, // 0 = tài khoản chính, 1 = người phụ thuộc
  ParentID: { type: "uniqueidentifier", default: null },
};

const editSchema = {
  ID: { type: "uniqueidentifier", required: true },
  FullName: { type: "nvarchar", length: 100, required: true },
  Email: { type: "nvarchar", length: 100, unique: true, required: true },
  Phone: { type: "nvarchar", length: 20, default: null },
  RoleID: { type: "int", required: true },
  Gender: { type: "nvarchar", length: 10, default: null },
  DateOfBirth: { type: "date", default: null },
  Address: { type: "nvarchar", length: 255, default: null },
  Avatar: { type: "nvarchar", length: 255, default: null },
  IsDependent: { type: "bit", default: 0 }, // 0 = tài khoản chính, 1 = người phụ thuộc
  ParentID: { type: "uniqueidentifier", default: null },
  Height: { type: "decimal", precision: 5, scale: 2, default: null },
  Weight: { type: "decimal", precision: 5, scale: 2, default: null },
  IsLogin: { type: "bit", default: 0 }, // 1 = online, 0 = offline
};

const deleteSchema = {
  ID: { type: "uniqueidentifier", required: true },
};

const loginSchema = {
  Username: { type: "varchar", length: 100, default: null },
  Password: { type: "varbinary", length: 64, default: null },
  IsLogin: { type: "bit", default: 0 },
};

const changePasswordSchema = {
  ID: { type: "uniqueidentifier", required: true },
  OldPassword: { type: "nvarchar", length: 255, required: true },
  NewPassword: { type: "nvarchar", length: 255, required: true },
};

module.exports = {
  filterSchema,
  addSchema,
  editSchema,
  deleteSchema,
  loginSchema,
  changePasswordSchema,
};

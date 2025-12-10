const BaseModel = require("./BaseModel");
const {
  filterSchema,
  addSchema,
  editSchema,
  deleteSchema,
  loginSchema,
  changePasswordSchema,
} = require("../schemas/users");

class UsersModel extends BaseModel {
  constructor(schema) {
    super(schema);
    this.schema = schema;
  }

  async getAll(data) {
    this.schema = filterSchema;
    return this.excuteSP("spu_Users_Gets", data, true);
  }

  async add(data) {
    this.schema = addSchema;
    return this.excuteSP("spu_Users_AddEdit", data);
  }

  async edit(data) {
    this.schema = editSchema;
    return this.excuteSP("spu_Users_AddEdit", data);
  }

  async delete(data) {
    this.schema = deleteSchema;
    return this.excuteSP("spu_Users_Delete", data);
  }

  async login(data) {
    this.schema = loginSchema;
    return this.excuteSP("spu_Users_Login", data);
  }

  async changePassword(data) {
    this.schema = changePasswordSchema;
    return this.excuteSP("spu_Users_ChangePassword", data);
  }
}

module.exports = new UsersModel();

const BaseModel = require("./BaseModel");
const {
  filterSchema,
  addSchema,
  editSchema,
  deleteSchema,
} = require("../schemas/roles");

class RolesModel extends BaseModel {
  constructor(schema) {
    super(schema);
    this.schema = schema;
  }

  async getAll(data) {
    this.schema = filterSchema;
    return this.excuteSP("spu_Roles_Gets", data, true);
  }

  async add(data) {
    this.schema = addSchema;
    return this.excuteSP("spu_Roles_AddEdit", data);
  }

  async edit(data) {
    this.schema = editSchema;
    return this.excuteSP("spu_Roles_AddEdit", data);
  }

  async delete(data) {
    this.schema = deleteSchema;
    return this.excuteSP("spu_Roles_Delete", data);
  }
}

module.exports = new RolesModel();

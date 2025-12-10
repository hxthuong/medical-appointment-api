const BaseModel = require("./BaseModel");
const {
  filterSchema,
  addSchema,
  editSchema,
  deleteSchema,
} = require("../schemas/departments");

class DepartmentsModel extends BaseModel {
  constructor(schema) {
    super(schema);
    this.schema = schema;
  }

  async getAll(data) {
    this.schema = filterSchema;
    return this.excuteSP("spu_Departments_Gets", data, true);
  }

  async add(data) {
    this.schema = addSchema;
    return this.excuteSP("spu_Departments_AddEdit", data);
  }

  async edit(data) {
    this.schema = editSchema;
    return this.excuteSP("spu_Departments_AddEdit", data);
  }

  async delete(data) {
    this.schema = deleteSchema;
    return this.excuteSP("spu_Departments_Delete", data);
  }
}

module.exports = new DepartmentsModel();

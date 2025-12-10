const BaseModel = require("./BaseModel");
const {
  filterSchema,
  addSchema,
  editSchema,
  deleteSchema,
} = require("../schemas/labResults");

class LabResultsModel extends BaseModel {
  constructor(schema) {
    super(schema);
    this.schema = schema;
  }

  async getAll(data) {
    this.schema = filterSchema;
    return this.excuteSP("spu_LabResults_Gets", data, true);
  }

  async add(data) {
    this.schema = addSchema;
    return this.excuteSP("spu_LabResults_AddEdit", data);
  }

  async edit(data) {
    this.schema = editSchema;
    return this.excuteSP("spu_LabResults_AddEdit", data);
  }

  async delete(data) {
    this.schema = deleteSchema;
    return this.excuteSP("spu_LabResults_Delete", data);
  }
}

module.exports = new LabResultsModel();

const BaseModel = require("./BaseModel");
const {
  filterSchema,
  addSchema,
  editSchema,
  deleteSchema,
} = require("../schemas/appointments");

class AppointmentsModel extends BaseModel {
  constructor(schema) {
    super(schema);
    this.schema = schema;
  }

  async getAll(data) {
    this.schema = filterSchema;
    return this.excuteSP("spu_Appointments_Gets", data, true);
  }

  async add(data) {
    this.schema = addSchema;
    return this.excuteSP("spu_Appointments_Add", data);
  }

  async edit(data) {
    this.schema = editSchema;
    return this.excuteSP("spu_Appointments_Edit", data);
  }

  async delete(data) {
    this.schema = deleteSchema;
    return this.excuteSP("spu_Appointments_Delete", data);
  }
}

module.exports = new AppointmentsModel();

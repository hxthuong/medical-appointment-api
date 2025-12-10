const BaseModel = require("./BaseModel");
const {
  filterSchema,
  addSchema,
  deleteSchema,
} = require("../schemas/chatMessengers");

class ChatMessengersModel extends BaseModel {
  constructor(schema) {
    super(schema);
    this.schema = schema;
  }

  async getAll(data) {
    this.schema = filterSchema;
    return this.excuteSP("spu_ChatMessengers_Gets", data, true);
  }

  async add(data) {
    this.schema = addSchema;
    return this.excuteSP("spu_ChatMessengers_Add", data);
  }

  async delete(data) {
    this.schema = deleteSchema;
    return this.excuteSP("spu_ChatMessengers_Delete", data);
  }
}

module.exports = new ChatMessengersModel();

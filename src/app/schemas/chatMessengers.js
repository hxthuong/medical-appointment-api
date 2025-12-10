const filterSchema = {
  ID: { type: "uniqueidentifier", default: null },
  Keyword: { type: "nvarchar", length: 1000, default: null },
  ConversationID: { type: "uniqueidentifier", default: null },
};

const addSchema = {
  SenderID: { type: "uniqueidentifier", required: true },
  ReceiverID: { type: "uniqueidentifier", default: null },
  ConversationID: { type: "uniqueidentifier", required: true },
  MessageText: { type: "nvarchar", max: true, default: null },
  MessageType: { type: "nvarchar", length: 20, default: "text" },
};

// const editSchema = {
//   ID: { type: "uniqueidentifier", primary: true },
//   SenderID: { type: "uniqueidentifier", required: true },
//   ReceiverID: { type: "uniqueidentifier", default: null },
//   ConversationID: { type: "uniqueidentifier", required: true },
//   MessageText: { type: "nvarchar", max: true, default: null },
//   MessageType: { type: "nvarchar", length: 20, default: "text" },
//   MessageText: { type: "nvarchar", max: true, default: null },
//   MessageType: { type: "nvarchar", length: 20, default: "text" },
// };

const deleteSchema = {
  ID: { type: "uniqueidentifier", required: true },
};

module.exports = { filterSchema, addSchema, deleteSchema };

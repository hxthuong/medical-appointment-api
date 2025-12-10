const appointmentRouter = require("./appointments");
const chatMessengerRouter = require("./chatMessengers");
const conversationRouter = require("./conversations");
const departmentRouter = require("./departments");
const doctorRouter = require("./doctors");
const fileRouter = require("./files");
const hospitalRouter = require("./hospitals");
const labResultRouter = require("./labResults");
const labResultDetailRouter = require("./labResultDetails");
const paymentRouter = require("./payments");
const reviewRouter = require("./reviews");
const roleRouter = require("./roles");
const serviceRouter = require("./services");
const userRouter = require("./users");

const uploadRouter = require("./uploads");

function route(app) {
  app.use("/appointment", appointmentRouter);

  app.use("/chatMessenger", chatMessengerRouter);

  app.use("/conversation", conversationRouter);

  app.use("/department", departmentRouter);

  app.use("/doctor", doctorRouter);

  app.use("/file", fileRouter);

  app.use("/hospital", hospitalRouter);

  app.use("/labResult", labResultRouter);

  app.use("/labResultDetail", labResultDetailRouter);

  app.use("/payment", paymentRouter);

  app.use("/review", reviewRouter);

  app.use("/role", roleRouter);

  app.use("/service", serviceRouter);

  app.use("/user", userRouter);

  app.use("/", uploadRouter);
}

module.exports = route;

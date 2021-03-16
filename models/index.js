const mongoose = require("mongoose");

const User = require("./user");
const Inquiry = require("./ןnquiry");

const connectDb = async () => {
  const mongoUrl = process.env.MONGO_USER_NAME_PASS;
  console.log("Connecting to mongo server: " + mongoUrl);
  return await mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
const models = { User,Inquiry };

module.exports = { connectDb, models };

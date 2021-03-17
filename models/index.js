const mongoose = require("mongoose");


const User = require("./user");
const Inquiry = require("./inquiry");
const Subject = require("./subject");

const connectDb = async () => {
  const mongoUrl =
    (process.env.NODE_ENV === "test" && process.env.MONGO_TEST_URL) ||
    process.env.MONGO_URL;
  console.log("Connecting to mongo server: " + mongoUrl);
  return await mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

connectDb().then(() => {
  console.log("connected to dataBase!");
});

const models = { User, Inquiry, Subject };

module.exports = { connectDb, models };

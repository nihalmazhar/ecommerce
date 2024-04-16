const mongoose = require("mongoose");

const CustomerSupportSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  subject: {
    type: String,
  },
  message: {
    type: String,
  },
});

const CustSupportModel = mongoose.model(
  "CustSupportModel",
  CustomerSupportSchema
);

module.exports = CustSupportModel;

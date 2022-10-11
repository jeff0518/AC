const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const urlSchema = new Schema({
  short_url: {
    type: String,
    required: true,
  },
  origin_url: {
    type: String,
    required: true,
  },
});

module.exports = model("Url", urlSchema);
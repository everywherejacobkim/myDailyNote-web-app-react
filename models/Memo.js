const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MemoSchema = new Schema({
  title: {
    type: String,
    required: true,
    maxLength: 150,
  },
  memo: {
    type: String,
    required: true,
    maxLength: 300,
  },
});

const Memo = mongoose.model("Memo", MemoSchema);

module.exports = Memo;

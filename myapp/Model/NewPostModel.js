var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var PostSchema = new Schema(
  {
    userid: String,
    comment: String,
    date: String
  },
  { collection: "newpost" }
);

var PostModel = mongoose.model("PostModel", PostSchema);

module.exports = PostModel;

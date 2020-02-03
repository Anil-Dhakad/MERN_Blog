var PostModel = require("../Model/NewPostModel");

function insert(ins, res) {
  var data = new PostModel(ins);
  console.log(ins);
  if (data.save()) {
    res.send("1");
  } else {
    res.send("0");
  }
}

function showpost(res) {
  // res.header("Access-Control-Allow-Origin", "*");

  // PostModel.deleteMany({}, function(err, data) {
  //   console.log("data: ", data);
  //   console.log("err: ", err);
  // });

  PostModel.find({}, function(err, data) {
    console.log(data);
    result = {};
  });
}

function showyourPost(abc, res) {
  res.header("Access-Control-Allow-Origin", "*");
  PostModel.find({}, function(err, data) {
    console.log(data);
    res.send("1");
  });
}

module.exports = {
  i: insert,
  s: showpost,
  syp: showyourPost
};

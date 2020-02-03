var UserModel = require("../Model/NewUserModel.js");

function insert(ins, res) {
  UserModel.find({ email: ins.email }, function(err, data) {
    // console.log('data:'+data.length)
    if (data.length != 0) {
      res.send("Email-Id already exists...");
    } else {
      var data = new UserModel(ins);
      data
        .save()
        .then(() => {
          res.send("1");
        })
        .catch(err => {
          res.send("0");
        });
    }
  });
}

function checkemail(ins, res, req) {
  //res.header("Access-Control-Allow-Origin", "*");
  //res.header("Access-Control-Allow-Credentials", true);

  //   console.log(ins.email, " :: ", ins.password);
  UserModel.find({ email: ins.email, password: ins.password }, function(
    err,
    data
  ) {
    // console.log("data: ", data.length);
    if (data.length != 0) {
      req.session.userid = data[0]._id;
      res.send(data.username);

      console.log("NewUserController: ", req.session.userid);
    } else if (data.length == 0) {
      res.send("1");
    } else {
      res.send("0");
    }
  });
}

function getUserData(userId, res) {
  //res.header("Access-Control-Allow-Origin", "*");

  UserModel.find({ _id: userId }, function(err, data) {
    result = {
      uname: data[0].username,
      udob: data[0].dob,
      uemail: data[0].email
    };
    res.send(result);
  });
}

module.exports = {
  i: insert,
  c: checkemail,
  g_user: getUserData
};

var db = require("../Controller/NewUserController.js");

module.exports = function(app) {
  app.post("/Signup", function(req, res) {
    var data = req.body;

    var ins = {
      username: data.name,
      dob: data.dob,
      email: data.email,
      password: data.pwd,
      cpwd: data.cpwd
    };
    db.i(ins, res);
  });

  app.post("/Login", function(req, res) {
    res.header("Access-Control-Allow-Credentials", true);
    var data = req.body;

    var ins = {
      email: data.email,
      password: data.pwd
    };

    db.c(ins, res, req);
  });

  app.post("/Home", function(req, res) {
    //res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);

    console.log("Get session value: ", req.session.userid);

    if (req.session.userid) {
      userId = req.session.userid;
      db.g_user(userId, res);
    } else {
      res.send("1");
    }
  });
};

// var promise = new Promise(function(resolve, reject){
//     db.i(ins, function(err, res){
//         if(err) reject(err);
//         else resolve(res);
//     });
// })
// .then(res => {
//     console.log(res);
// })
// .catch(err => {
//     console.log(err);
// });

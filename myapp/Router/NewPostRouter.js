var db = require("../Controller/NewPostController");
var date = require("date-and-time");

module.exports = function(app) {
  app.post("/Insertpost", function(req, res) {
    res.header("Access-Control-Allow-Credentials", true);
    var data = req.body;
    // console.log(data);
    var now = date.format(new Date(), "DD/MM/YYYY hh:mm A");
    // console.log(now);
    var ins = {
      userid: req.session.userid,
      comment: data.comment,
      date: now
    };
    // console.log(ins);
    db.i(ins, res);
  });

  app.post("/showpost", function(res, req) {
    res.header("Access-Control-Allow-Credentials", true);

    console.log("Get session value: ", req.session.userid);

    // db.s(res);
  });

  app.post("/ShowYourPost", function(res, req) {
    // res.header("Access-Control-Allow-Credentials", true);

    console.log("aaa");
    // console.log("Get session value: ", req.session.userid);
    var abc = "anil";
    db.syp(abc, res);
  });
};

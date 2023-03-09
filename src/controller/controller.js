const { blog1, blog2 } = require("../model/schema");
const HTTP = require("../../constant/response.constant");

var session;

class class1 {
  static a = async (req, res) => {
    try {
      if (req.body.PhoneNumber && req.body.username && req.body.password) {
        var a = await blog2.find({ username: req.body.username });
        if (a.length == 1) {
          if (
            a[0].username == req.body.username &&
            a[0].password == req.body.password
          ) {
            session = req.session;
            session.token = req.body.PhoneNumber;
            var b = await blog1.find({ PhoneNumber: req.body.PhoneNumber });
            if (b.length == 0) {
              let data = new blog1({
                PhoneNumber: req.body.PhoneNumber,
                Coin: 100,
              });
              await data.save();
              res.send(data);
            } else {
              res.send(b[0]);
            }
          } else {
            res.send("Wrong Credential");
          }
        } else {
          res.send("Wrong Credential");
        }
      } else {
        res.send(" Insufficient Data ");
      }
    } catch (err) {
      return res.status(HTTP.SUCCESS).send({
        errors: [
          {
            message: err,
            code: HTTP.INTERNAL_SERVER_ERROR,
          },
        ],
      });
    }
  };
  static b = async (req, res) => {
    try {
      if (req.session.token) {
        var a = req.params.id * 100;
        var b = await blog1.find({ PhoneNumber: req.session.token });
        if (b[0].Coin + a < 0) {
          return res.status(HTTP.SUCCESS).send({
            message: "Insufficient balance",
          });
        } else {
          b[0].Coin = b[0].Coin + a;
          b[0].save();
          res.send(b);
        }
      } else {
        return res.status(HTTP.SUCCESS).send({
          message: "session expired",
        });
      }
    } catch (err) {}
  };
  static d = async (req, res) => {
    try {
      var a = await blog1.find({});
      res.send(a);
    } catch (err) {}
  };
  static e = async (req, res) => {
    try {
      await blog1.find({}).deleteMany();
      res.send(" data delete sucessfully ");
    } catch (err) {}
  };
}

module.exports = { class1 };

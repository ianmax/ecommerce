const user = require('../models/userModel');

class User {
  static signup(req, res) {
    user.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    }).then((user) => {
      res.send(user);
    }).catch((err) => {
      res.send(err);
    });
  }

  static signin(req, res) {
    user.findOne({ email: req.body.email }).then((user) => {
      if (user) {
        kripto.dekripsi(req.body.password, user.password).then((hasil) => {
          if (hasil) {
            res.send({
              username: user.username,
              email: user.email,
            });
          } else {
            res.send({
              msg: 'tidak ditemukan',
            });
          }
        });
      } else {
        res.send({
          msg: 'tidak ditemukan',
        });
      }
    });
  }
}

module.exports = User;

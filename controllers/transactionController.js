const transaction = require('../models/transactionModel');

class Transaction {

  static buy(req, res) {
    transaction.create({
      customer: req.body.customer,
      totalprice: req.body.totalprice,
      items: req.body.item,
    }).then((transaksi) => {
      res.send(transaksi);
    });
  }

  static getall(req, res) {
    transaction.find().populate('items').exec((err, transaction) => {
      res.send(transaction);
    });
  }

  static getone(req, res) {
    transaction.findOne({ _id: req.params.id }).then((transaction) => {
      transaction.findOne({ _id: req.params.id }).populate('items').exec((err, hasil) => {
        res.send(hasil);
      });
    });
  }

}

module.exports = Transaction;

const Item = require('../models/itemModel');

const create = (req, res) => {
  let item = new Item({
    name: req.body.name || '',
    image: req.body.image || '',
    stock: req.body.stock || 0,
    price: req.body.price || 0,
    description: req.body.description || '',
    category: req.body.category || '',
    subcategory: req.body.subcategory || '',
  });

  item.save()
  .then(success => {
    res.send(success);
  })
  .catch(err => {
    res.status(500).send(err);
  });
};

const findAll = (req, res) => {
  Item.find()
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    console.log(err);
    res.send(err);
  });
};

const update = (req, res) => {
  Item.update(
    {
    _id: req.params.id,
  }, {
    name: req.body.name,
    image: req.body.image,
    stock: req.body.stock,
    price: req.body.price,
    description: req.body.description,
    category: req.body.category,
    subcategory: req.body.subcategory,
  })
  .then(success => {
    res.send(success);
  })
  .catch(err => {
    res.status(401).send(err);
  });
};

const remove = (req, res) => {
  Item.remove({
    _id: req.params.id,
  })
  .then(success => {
    res.send(success);
  })
  .catch(err => {
    res.status(401).send(err);
  });
};

module.exports = {
  create,
  findAll,
  update,
  remove,
};

const models = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.getAll = (req, res) => {
  models.accounts
    .findAll()
    .then(accounts => res.send(accounts))
    .catch(err => res.send(err));
};

exports.createArtist = (req, res) => {
  models.Artists.create(req.body)
    .then(Artist => res.send(Artist))
    .catch(err => console.log(err));
};
// exports.deleteOne = (req, res) => {
//   models.accounts
//     .findOne({ where: { id: req.params.id } })
//     .then(accounts => accounts.destroy())
//     .then(result => res.send(result))
//     .catch(err => res.send(err));
// };

// exports.deleteAll = (req, res) => {
//   models.accounts
// }

exports.search = (req, res) => {
  models.accounts
    .findAll({
      where: req.query
    })
    .then(accounts => res.send(accounts))
    .catch(err => res.send(err));
};

exports.update = (req, res) => {
  models.accounts
    .update(req.body, {
      where: {
        id: req.params.id
      }
    })
    .then(result => res.send(result))
    .catch(err => console.log(err));
};

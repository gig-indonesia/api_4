const models = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.getAll = (req, res) => {
  models.Artist.findAll({ limit: 3, order: [["createdAt", "DESC"]] })
    .then(accounts => res.send(accounts))
    .catch(err => res.send(err));
};

exports.getNotif = (req, res) => {
  models.Artist.findOne({
    where: {
      id: req.decoded.id
    },
    include: [{ model: models.ArtistNotif }]
  })
    .then(host => res.send(host))
    .catch(err => console.log(err));
};

exports.getApplicant = (req, res) => {
  models.Artist.findOne({
    where: {
      artistId: req.decoded.id
    },
    include: [{ model: models.Gig }]
  })
    .then(app => res.send(app))
    .catch(err => console.log(err));
};

// exports.getAll = (req, res) => {
//   models.Artist.findAll()
//     .then(accounts => res.send(accounts))
//     .catch(err => res.send(err));
// };

exports.createArtist = (req, res) => {
  models.Artist.create(req.body)
    .then(artist => res.send(artist))
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
  models.Artist.findAll({
    where: req.query
  })
    .then(accounts => res.send(accounts))
    .catch(err => res.send(err));
};

exports.update = (req, res) => {
  models.Artist.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(result => res.send(result))
    .catch(err => console.log(err));
};

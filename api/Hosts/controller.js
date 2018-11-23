const models = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.showHost = (req, res) => {
  models.Hosts.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(Host => res.send(Host))
    .catch(err => console.log(err));
};

exports.createHost = (req, res) => {
  models.Hosts.create(req.body)
    .then(Host => res.send(Host))
    .catch(err => console.log(err));
};

exports.updateHost = (req, res) => {
  models.accounts
    .update(req.body, {
      where: {
        id: req.params.id
      }
    })
    .then(result => res.send(result))
    .catch(err => console.log(err));
};

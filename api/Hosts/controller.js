const models = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.showHost = (req, res) => {
  models.Host.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(Host => res.send(Host))
    .catch(err => console.log(err));
};

exports.createHost = (req, res) => {
  models.Host.create(req.body)
    .then(Host => res.send(Host))
    .catch(err => console.log(err));
};

exports.updateHost = (req, res) => {
  models.Host.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(result => res.send(result))
    .catch(err => console.log(err));
};

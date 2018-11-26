const models = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Sequelize = require("sequelize");

exports.create = (req, res) => {
  models.HostNotif.create(req.body)
    .then(notif => res.send(notif))
    .catch(err => res.send(404));
};

const models = require("../models");

exports.getAll = (req, res) => {
  models.CreateGig.findAll()
    .then(creategig => res.send(creategig))
    .catch(err => console.log(err));
};

exports.getCreated = (req, res) => {
  models.CreateGig.findAll({
    where: {
      id: req.params.id
    },
    order: ["updatedAt", "DESC"],
    limit: 10
  })
    .then(creategig => res.send(creategig))
    .catch(err => console.log(err));
};

exports.creategig = (req, res) => {
  models.CreateGig.create(req.body)
    .then(CreateGig => res.send(CreateGig))
    .catch(err => console.log(err));
};

//insert data---------------------
// exports.post = (req, res) => {
//   const SALT_WORK_FACTOR = 7;
//   const salt = bcrypt.genSaltSync(SALT_WORK_FACTOR);

//   req.body.password = bcrypt.hashSync(req.body.password, salt);
//   models.accounts
//     .create(req.body)
//     .then(account => res.send(account))
//     .catch(err => res.send(err));
// };

exports.deleteOne = (req, res) => {
  models.CreateGigs.findOne({ where: { id: req.params.id } })
    .then(creategig => creategig.destroy())
    .then(result => res.send(result))
    .catch(err => res.send(err));
};

// exports.deleteAll = (req, res) => {
//   models.accounts
// }

exports.search = (req, res) => {
  models.CreateGigs.findAll({
    where: req.query
  })
    .then(creategig => res.send(creategig))
    .catch(err => res.send(err));
};

exports.update = (req, res) => {
  models.CreateGigs.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(result => res.send(result))
    .catch(err => console.log(err));
};

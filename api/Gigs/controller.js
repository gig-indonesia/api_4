const models = require("../models");

exports.getAll = (req, res) => {
  models.Gig.findAll()
    .then(Gig => res.send(Gig))
    .catch(err => console.log(err));
};

exports.getApplicant = (req, res) => {
  models.Gig.findOne({
    where: {
      id: req.params.id
    },
    include: ["Artists"]
  })
    .then(app => res.send(app))
    .catch(err => console.log(err));
};

// exports.getCreated = (req, res) => {
//   models.Gig.findAll({
//     where: {
//       id: req.params.id
//     },
//     order: ["updatedAt", "DESC"],
//     limit: 10
//   })
//     .then(Gig => res.send(Gig))
//     .catch(err => console.log(err));
// };

exports.create = (req, res) => {
  models.Gig.create(req.body)
    .then(Gig => res.send(Gig))
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
  models.Gigs.findOne({ where: { id: req.params.id } })
    .then(Gig => Gig.destroy())
    .then(result => res.send(result))
    .catch(err => res.send(err));
};

// exports.deleteAll = (req, res) => {
//   models.accounts
// }

exports.search = (req, res) => {
  models.Gigs.findAll({
    where: req.query
  })
    .then(Gig => res.send(Gig))
    .catch(err => res.send(err));
};

exports.update = (req, res) => {
  models.Gigs.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(result => res.send(result))
    .catch(err => console.log(err));
};

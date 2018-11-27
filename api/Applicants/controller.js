const models = require("../models");

exports.create = (req, res) => {
  models.Applicant.create(req.body)
    .then(applicant => res.send(applicant))
    .catch(err => console.log(err));
};

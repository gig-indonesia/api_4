const models = require("../models");

exports.create = async (req, res) => {
  const artist = await models.Artist.findOne({
    where: {
      accountId: req.decoded.id
    }
  });

  const applicant = await models.Applicant.create({
    status: req.body.status,
    gigsId: req.body.gigsId,
    artistId: artist.id
  });

  res.send(applicant);
};

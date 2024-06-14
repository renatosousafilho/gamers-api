const { Certification, Gamer } = require('../models');

const findById = async (req, res) => {
  const certification = await Certification.findByPk(req.params.id, {
    include: { model: Gamer, as: 'gamers', through: { attributes: [] } },
  });
  res.status(200).json(certification);
};

const getGamers = async (req, res) => {
  const certification = await Certification.findByPk(req.params.id);
  // // lazy loading
  const gamers = await certification.getGamers({
    joinTableAttributes: [],
  });

  res.status(200).json(gamers);
};

module.exports = {
  findById,
  getGamers,
};
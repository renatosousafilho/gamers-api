const { GamerChallenge, Gamer } = require('../models');

const list = async (req, res) => {
  const challenges = await GamerChallenge.findAll();
  res.status(200).json(challenges);
};

const findById = async (req, res) => {
  const challenge = await GamerChallenge.findByPk(req.params.id, {
    include: { model: Gamer, as: 'gamer' },
  });
  res.status(200).json(challenge);
};

module.exports = {
  list,
  findById,
};
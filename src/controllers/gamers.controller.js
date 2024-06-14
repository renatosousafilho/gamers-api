const { Gamer, GamerChallenge, Certification } = require('../models');

const list = async (req, res) => {
  const gamers = await Gamer.findAll();
  res.status(200).json(gamers);
};

const create = async (req, res) => {
  const { name, active } = req.body;
  await Gamer.create({ name, active });
  res.status(201).send('Gamer has been created!');
};

const findById = async (req, res) => {
  const { id } = req.params;
  const gamer = await Gamer.findByPk(id, {
    include: [
      { model: GamerChallenge, as: 'challenges' },
      { model: Certification, as: 'certifications', through: { attributes: [] } },
      //  
    ],
  });
  // const gamer = await Gamer.findOne({ where: { id } });
  res.status(200).json(gamer);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { name, active } = req.body;
  await Gamer.update(
    { name, active },
    { where: { id } },
  );
  res.status(200).json({ message: 'Gamer updated' });
};

const remove = async (req, res) => {
  const { id } = req.params;
  await Gamer.destroy({
    where: { id },
  });
  res.status(200).json({ message: 'Gamer removed' });
};

const getCertifications = async (req, res) => {
  const gamer = await Gamer.findByPk(req.params.id);
  const certifications = await gamer.getCertifications({
    joinTableAttributes: [],
  });
  res.status(200).json(certifications);
};

module.exports = {
  list,
  create,
  findById,
  update,
  remove,
  getCertifications,
};
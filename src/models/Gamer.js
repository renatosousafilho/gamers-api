module.exports = (sequelize, DataTypes) => {
  const Gamer = sequelize.define('Gamer', {
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
  }, {
    tableName: 'gamers',
    timestamps: false,
  });

  Gamer.associate = (models) => {
    // console.log(models);
    Gamer.hasMany(models.GamerChallenge, {
      as: 'challenges',
      foreignKey: 'gamerId',
    });
  }

  return Gamer;
}
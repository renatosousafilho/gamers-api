module.exports = (sequelize, DataTypes) => {
  const GamerChallenge = sequelize.define('GamerChallenge', {
    score: DataTypes.INTEGER,
    language:  DataTypes.STRING,
    finishedAt: DataTypes.DATE,
    gamerId: DataTypes.INTEGER,
  }, {
    tableName: 'gamers_challenges',
    underscored: true,
    timestamps: false,
  });

  GamerChallenge.associate = (models) => {
    GamerChallenge.belongsTo(models.Gamer, {
      as: 'gamer',
      foreignKey: 'gamerId',
    })
  }

  return GamerChallenge;
}
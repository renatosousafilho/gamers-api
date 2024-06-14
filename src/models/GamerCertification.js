module.exports = (sequelize, DataTypes) => {
  const GamerCertification = sequelize.define('GamerCertification', {
    gamerId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    certificationId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  }, {
    tableName: 'gamers_certifications',
    underscored: true,
    timestamps: false,
  });

  GamerCertification.associate = (models) => {
    // Certification -> Gamer
    models.Certification.belongsToMany(models.Gamer, {
      as: 'gamers',
      foreignKey: 'certificationId',
      otherKey: 'gamerId',
      through: models.GamerCertification,
    });

    // Gamer -> Certification
    models.Gamer.belongsToMany(models.Certification, {
      as: 'certifications',
      foreignKey: 'gamerId', // aponta para o model que chama a função belongsToMany
      otherKey: 'certificationId', // aponta para o model passado como parâmetro na função belongsToMany
      through: models.GamerCertification,
    });
  }

  return GamerCertification;
}
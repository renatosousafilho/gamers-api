module.exports = (sequelize, DataTypes) => {
  const Certification = sequelize.define('Certification', {
    name: DataTypes.STRING,
    minScore: DataTypes.INTEGER,
  }, {
    tableName: 'certifications',
    underscored: true,
    timestamps: false,
  });

  return Certification;
}
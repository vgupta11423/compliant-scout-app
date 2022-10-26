module.exports = (sequelize, Sequelize) => {
  const License = sequelize.define("license", {
    license_cost: {
      type: Sequelize.DOUBLE,
    },
    license_id: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    license_name: {
      type: Sequelize.STRING,
    },
  });

  return License;
};
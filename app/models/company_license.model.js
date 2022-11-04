module.exports = (sequelize, Sequelize) => {
  const Company_license = sequelize.define("company_licenses", {
    c_id: { // FK in db
      type: Sequelize.STRING,
    },
    license_id: { // will act as PK // FK in db
      type: Sequelize.STRING,
      primaryKey: true,
    },
    license_status: {
      type: Sequelize.STRING
    },
    license_status_date: {
      type: Sequelize.DATEONLY
    },
  }, {
    // This tells Sequelize to not infer with the given table name
    // of company_license. W/o this it turns into company_licenses
    freezeTableName: true
  });

  return Company_license;
};
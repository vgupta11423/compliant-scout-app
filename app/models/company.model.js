module.exports = (sequelize, Sequelize) => {
  const Company = sequelize.define("company_info", {
    c_EIN: {
      type: Sequelize.STRING
    },
    c_address: {
      type: Sequelize.STRING
    },
    c_city: {
      type: Sequelize.STRING
    },
    c_county: {
      type: Sequelize.STRING
    },
    c_email: {
      type: Sequelize.STRING,
    },
    c_id: {
      type: Sequelize.STRING,
      // This tells Sequelize c_id is the pk of this table
      primaryKey: true,
    },
    c_locationName: {
      type: Sequelize.STRING
    },
    c_mailAddress: {
      type: Sequelize.STRING
    },
    c_name: {
      type: Sequelize.STRING
    },
    c_phoneNumber: {
      type: Sequelize.STRING
    }, 
  }, {
    // This tells Sequelize to not infer with the given table name
    // of company_info. W/o this it turns into company_infos
    freezeTableName: true
  });

  return Company;
};
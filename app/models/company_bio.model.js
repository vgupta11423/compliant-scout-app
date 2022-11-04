module.exports = (sequelize, Sequelize) => {
  const Company_bio = sequelize.define("company_bio", {
    // TODO : use this as PK
    c_id: { // this is the foreign key
      type: Sequelize.STRING,
    },
    first_date_op: {
      type: Sequelize.DATEONLY
    },
    lease_exp_date: {
      type: Sequelize.DATEONLY
    },
    property_owner_company: {
      type: Sequelize.STRING
    },
    property_owner_ein: {
      type: Sequelize.STRING,
      primaryKey: true,
      
    },
    purchase_date: {
      type: Sequelize.DATEONLY,
    },
    purchase_price: {
      type: Sequelize.DOUBLE
    },
    rent: {
      type: Sequelize.DOUBLE
    },
  }, {
    // This tells Sequelize to not infer with the given table name
    // of company_bio. W/o this it turns into company_bios
    freezeTableName: true
  });

  return Company_bio;
};
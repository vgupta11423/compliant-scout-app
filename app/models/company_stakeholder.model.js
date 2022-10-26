module.exports = (sequelize, Sequelize) => {
  const Company_stakeholder = sequelize.define("company_stakeholders", {
    c_id: { // FK
      type: Sequelize.STRING,
    },
    s_id: { // FK
      type: Sequelize.STRING,
    },
  }, {
    // This tells Sequelize to not infer with the given table name
    // of Company_stakeholder. W/o this it turns into Company_stakeholders
    freezeTableName: true
  });
  // disables PKs for this table.
  // Be warned that this could cause problems in the future, as Sequelize is an ORM and joins will need extra setup
  Company_stakeholder.removeAttribute('id');


  return Company_stakeholder;
};
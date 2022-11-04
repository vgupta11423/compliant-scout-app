module.exports = (sequelize, Sequelize) => {
  const Stakeholder = sequelize.define("stakeholder", {
    s_address: {
      type: Sequelize.STRING
    },
    s_dob: {
      type: Sequelize.DATEONLY
    },
    s_email: {
      type: Sequelize.STRING
    },
    s_firstName: {
      type: Sequelize.STRING
    },
    s_id: {
      type: Sequelize.STRING,
      // This tells Sequelize s_id is the pk of this table
      primaryKey: true,
    },
    c_id: {
      type: Sequelize.STRING
    },
    s_lastName: {
      type: Sequelize.STRING
    },
    s_personal_funds_invested: {
      type: Sequelize.DOUBLE
    },
    s_place_of_birth: {
      type: Sequelize.STRING
    },
    s_spouse_firstName: {
      type: Sequelize.STRING
    },
    s_spouse_lastName: {
      type: Sequelize.STRING
    },
    s_title: {
      type: Sequelize.STRING
    },
  });

  return Stakeholder;
};
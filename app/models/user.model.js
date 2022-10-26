module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    first_name: {
      type: Sequelize.STRING,
    },
    last_name: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    user_id: {
      type: Sequelize.STRING,
      // This tells Sequelize the user_id is the PK of the User table
      primaryKey: true,
    },
  });

  return User;
};
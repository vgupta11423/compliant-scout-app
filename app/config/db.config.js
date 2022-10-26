// Configures MySQL DB information for Sequelize

module.exports = {
  HOST: "scoutdatabase.ca06mma26f0k.us-east-1.rds.amazonaws.com",
  USER: "scountAdmin",
  PASSWORD: "O!2)ad(SL1x+",
  DB: "cis4375",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
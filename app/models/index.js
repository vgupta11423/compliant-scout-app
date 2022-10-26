const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user.model.js")(sequelize, Sequelize);
db.stakeholders = require("./stakeholder.model.js")(sequelize, Sequelize);
db.licenses = require("./license.model.js")(sequelize, Sequelize);
db.companies = require("./company.model.js")(sequelize, Sequelize);
db.company_bios = require("./company_bio.model.js")(sequelize, Sequelize);
db.company_licenses = require("./company_license.model.js")(sequelize, Sequelize);
db.company_stakeholders = require("./company_stakeholder.model.js")(sequelize, Sequelize);

module.exports = db;
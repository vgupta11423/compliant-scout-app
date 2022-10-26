/*
This file will handle how the server responds to
endpoints related to Company_stakeholder

When an endpoint is used, it will use the given function inside the Company_stakeholder controller
*/


module.exports = app => {
  const company_stakeholders = require("../controllers/company_stakeholder.controller.js");

  var router = require("express").Router();

  // Endpoint that will create a new Company_stakeholder
  router.post("/", company_stakeholders.create);

  // Endpoint that will retrieve all company_stakeholders
  router.get("/", company_stakeholders.findAll)

  // Endpoint that will delete a Company_stakeholder with the given s_id
  router.delete("/:s_id", company_stakeholders.delete);

  // Idk what this does? I think this uses the address of the api aka our db
  app.use('/api/company_stakeholders', router);
};
/*
This file will handle how the server responds to
endpoints related to Companies

When an endpoint is used, it will use the given function inside the Company controller
*/


module.exports = app => {
  const companies = require("../controllers/company.controller.js");

  var router = require("express").Router();

  // Endpoint that will create a new company
  router.post("/", companies.create);

  // Endpoint that will retrieve all companies
  router.get("/", companies.findAll)

  // Endpoint that will retrieve a single company with the given id
  router.get("/:c_id", companies.findOne);

  // Endpoint that will update a company with the given company id
  router.put("/:c_id", companies.update);

  // Endpoint that will delete a company with the given id
  router.delete("/:c_id",companies.delete);

  // Endpoint that will delete all companies
  router.delete("/", companies.deleteAll);

  // Idk what this does? I think this uses the address of the api aka our db
  app.use('/api/companies', router);
};
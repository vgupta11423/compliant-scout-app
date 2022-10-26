/*
This file will handle how the server responds to
endpoints related to Stakeholders

When an endpoint is used, it will use the given function inside the Stakholder controller
*/


module.exports = app => {
  const stakeholders = require("../controllers/stakeholder.controller.js");

  var router = require("express").Router();

  // Endpoint that will create a new stakeholder
  router.post("/", stakeholders.create);

  // Endpoint that will retrieve all stakeholders
  router.get("/", stakeholders.findAll)

  // Endpoint that will retrieve a single stakeholder with the given id
  router.get("/:s_id", stakeholders.findOne);

  // Endpoint that will update a stakeholder with the given stakeholder id
  router.put("/:s_id", stakeholders.update);

  // Endpoint that will delete a stakeholder with the given id
  router.delete("/:s_id",stakeholders.delete);

  // Endpoint that will delete all stakeholders
  router.delete("/", stakeholders.deleteAll);

  // Idk what this does? I think this uses the address of the api aka our db
  app.use('/api/stakeholders', router);
};
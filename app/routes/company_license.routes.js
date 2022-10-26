/*
This file will handle how the server responds to
endpoints related to Company_license

When an endpoint is used, it will use the given function inside the Company_license controller
*/


module.exports = app => {
  const company_licenses = require("../controllers/company_license.controller.js");

  var router = require("express").Router();

  // Endpoint that will create a new Company_license
  router.post("/", company_licenses.create);

  // Endpoint that will retrieve all company_licenses
  router.get("/", company_licenses.findAll)

  // Endpoint that will retrieve a single Company_license with the given license_id
  router.get("/:license_id", company_licenses.findOne);

  // Endpoint that will update a Company_license with the given  license_id
  router.put("/:license_id", company_licenses.update);

  // Endpoint that will delete a Company_license with the given license_id
  router.delete("/:license_id", company_licenses.delete);

  // Idk what this does? I think this uses the address of the api aka our db
  app.use('/api/company_licenses', router);
};
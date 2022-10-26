/*
This file will handle how the server responds to
endpoints related to Company_bio

When an endpoint is used, it will use the given function inside the Company_bio controller
*/


module.exports = app => {
  const company_bios = require("../controllers/company_bio.controller.js");

  var router = require("express").Router();

  // Endpoint that will create a new company_bio
  router.post("/", company_bios.create);

  // Endpoint that will retrieve all company_bios
  router.get("/", company_bios.findAll)

  // Endpoint that will retrieve a single company_bio with the given property_owner_ein
  router.get("/:property_owner_ein", company_bios.findOne);

  // Endpoint that will update a company_bio with the given  property_owner_ein
  router.put("/:property_owner_ein", company_bios.update);

  // Endpoint that will delete a company_bio with the given property_owner_ein
  router.delete("/:property_owner_ein", company_bios.delete);

  // Endpoint that will delete a company_bio with the given property_owner_ein and property_owner_company
  router.delete("/:property_owner_ein/:property_owner_company", company_bios.deleteByName);

  // Idk what this does? I think this uses the address of the api aka our db
  app.use('/api/company_bios', router);
};
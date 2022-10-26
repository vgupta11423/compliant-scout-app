/*
This file will handle how the server responds to
endpoints related to Licenses

When an endpoint is used, it will use the given function inside the License controller
*/


module.exports = app => {
  const licenses = require("../controllers/license.controller.js");

  var router = require("express").Router();

  // Endpoint that will create a new license
  router.post("/", licenses.create);

  // Endpoint that will retrieve all licenses
  router.get("/", licenses.findAll)

  // Endpoint that will retrieve a single license with the given id
  router.get("/:license_id", licenses.findOne);

  // Endpoint that will update a license with the given license id
  router.put("/:license_id", licenses.update);

  // Endpoint that will delete a license with the given id
  router.delete("/:license_id",licenses.delete);

  // Endpoint that will delete all licenses
  router.delete("/", licenses.deleteAll);

  // Idk what this does? I think this uses the address of the api aka our db
  app.use('/api/licenses', router);
};
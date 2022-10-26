/*
This file will handle how the server responds to
endpoints related to Users

When an endpoint is used, it will use the given function inside the User controller
*/

module.exports = app => {
  const users = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Endpoint that will create a new User
  router.post("/", users.create);

  // Endpoint that will retrieve all Users
  router.get("/", users.findAll)

  // Endpoint that will retrieve a single User with the given id
  router.get("/:user_id", users.findOne);

  // Endpoint that will update a User with the given user id
  router.put("/:user_id", users.update);

  // Endpoint that will delete a User with the given id
  router.delete("/:user_id",users.delete);

  // Endpoint that will delete all Users
  router.delete("/", users.deleteAll);

  // Idk what this does? I think this uses the address of the api aka our db
  app.use('/api/users', router);
};
// These are Sequelize created CRUD functions that will be used
// for Tutorials

const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new User
exports.create = (req, res) => {
  // Validate request by making sure first/ last name or pwd isnt empty
  if (!req.body.first_name) {
    res.status(400).send({
      message: "Everything must be filled out!"
    });
    return;
  }

  // Create a User
  const user = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    password: req.body.password,
    user_id: req.body.user_id
  };

  // Save the created User to the DB
  User.create(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "An error occured while creating this User."
      });
    });
};

// Get all Users or find by first name from the DB
exports.findAll = (req, res) => {
  const first_name = req.query.first_name;
  // if there's a first name, that's the condition and first names like the one entered will be listed,
  //  if not there is no condition and all users will be listed
  var condition = first_name ? { first_name: { [Op.like]: `%${first_name}%` } } : null;

  User.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "An error occured while retriving Users."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const user_id = req.params.user_id;

  User.findByPk(user_id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find User with user id: ${user_id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message ||  `Error retrieving User with user id ` + user_id
      });
    });
};

// Update a User by the user id in the request
exports.update = (req, res) => {
  const user_id = req.params.user_id;

  User.update(req.body, {
    where: { user_id: user_id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was successfully updated."
        });
      } else {
        res.send({
          message: `Can't update User with user id: ${user_id}. Maybe User was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Error updating User with user id: " + user_id
      });
    });
};

// Delete a User with the specifid user id in the request
exports.delete = (req, res) => {
  const user_id = req.params.user_id;

  User.destroy({
    where: { user_id: user_id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!"
        });
      } else {
        res.send({
          message: `Can't delete User with id ${user_id}. Maybe User was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Cound not delete User with id " + user_id
      });
    });
};

// Delete all Users from the db
exports.deleteAll = (req, res) => {
  User.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      re.send({ message: `${nums} Users were deleted successfully!`})
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "An error occured while deleting all Users"
      })
    })
};

// Find all published Tutorials
// exports.findAllPublished = (req, res) => {
//   // Find all tutorials where published = true
//   Tutorial.findAll({ where: { published: true } })
//   .then(data => {
//     res.send(data);
//   })
//   .catch(err => {
//     res.status(500).send({
//       message: err.message || "An error occured while retrieving all published Tutorials"
//     });
//   });

// /*
// This controller can be modified to return a pagination response
// See https://bezkoder.com/node-js-sequelize-pagination-mysql/
// */
// };
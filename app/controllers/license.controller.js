// These are Sequelize created CRUD functions that will be used
// for Licenses

const db = require("../models");
const License = db.licenses;
const Op = db.Sequelize.Op;

// Create and Save a new License
exports.create = (req, res) => {
  // Validate request by making sure license name isn't empty
  if (!req.body.license_name) {
    res.status(400).send({
      message: "License Name must be filled out!"
    });
    return;
  }

  // Create a License
  const license = {
    license_cost: req.body.license_cost,
    license_id: req.body.license_id,
    license_name: req.body.license_name,
  };

  // Save the created License to the DB
  License.create(license)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "An error occured while creating this License."
      });
    });
};

// Get all Licenses or find by license name from the DB
exports.findAll = (req, res) => {
  const license_name = req.query.license_name;
  // if there's a license name, that's the condition and license names like the one entered will be listed,
  //  if not there is no condition then all Licenses will be listed
  var condition = license_name ? { license_name: { [Op.like]: `%${license_name}%` } } : null;

  License.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "An error occured while retrieving Licenses."
      });
    });
};

// Find a single License with license id
exports.findOne = (req, res) => {
  const license_id = req.params.license_id;

  License.findByPk(license_id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find License with License id: ${license_id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message ||  `Error retrieving License with License id ` + license_id
      });
    });
};

// Update a License by the License id in the request
exports.update = (req, res) => {
  const license_id = req.params.license_id;

  License.update(req.body, {
    where: { license_id: license_id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "License was successfully updated."
        });
      } else {
        res.send({
          message: `Can't update License with License id: ${license_id}. Maybe License was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Error updating License with License id: " + license_id
      });
    });
};

// Delete a License with the specified License id in the request
exports.delete = (req, res) => {
  const license_id = req.params.license_id;

  License.destroy({
    where: { license_id: license_id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "License was deleted successfully!"
        });
      } else {
        res.send({
          message: `Can't delete License with id ${license_id}. Maybe License was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Could not delete License with id " + license_id
      });
    });
};

// Delete all Licenses from the db
exports.deleteAll = (req, res) => {
  License.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      re.send({ message: `${nums} Licenses were deleted successfully!`})
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "An error occured while deleting all Licenses"
      })
    })
};

/*
This controller can be modified to return a pagination response
See https://bezkoder.com/node-js-sequelize-pagination-mysql/
*/
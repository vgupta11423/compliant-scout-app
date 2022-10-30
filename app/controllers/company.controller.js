// These are Sequelize created CRUD functions that will be used
// for Company

const db = require("../models");
const Company = db.companies;
const Op = db.Sequelize.Op;

// Create and Save a new Company
exports.create = (req, res) => {
  // Validate request by making sure Company name isn't empty
  if (!req.body.c_name) {
    res.status(400).send({
      message: "Company Name must be filled out!"
    });
    return;
  }

  // Create a Company
  const company = {
    c_EIN: req.body.c_EIN,
    c_address: req.body.c_address,
    c_city: req.body.c_city,
    c_county: req.body.c_county,
    c_email: req.body.c_email,
    c_id: req.body.c_id,
    c_locationName: req.body.c_locationName,
    c_mailAddress: req.body.c_mailAddress,
    c_name: req.body.c_name,
    c_phoneNumber: req.body.c_phoneNumber,
    c_owned: req.body.c_owned,
  };

  // Save the created Company to the DB
  Company.create(company)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "An error occured while creating this Company."
      });
    });
};

// Get all companies or find by Company name from the DB
exports.findAll = (req, res) => {
  const c_name = req.query.c_name;
  // if there's a Company name, that's the condition and Company names like the one entered will be listed,
  //  if not there is no condition then all companies will be listed
  var condition = c_name ? { c_name: { [Op.like]: `%${c_name}%` } } : null;

  Company.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "An error occured while retrieving companies."
      });
    });
};

// Find a single Company with Company id
exports.findOne = (req, res) => {
  const c_id = req.params.c_id;

  Company.findByPk(c_id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Company with Company id: ${c_id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `Error retrieving Company with Company id ` + c_id
      });
    });
};

// Update a Company by the Company id in the request
exports.update = (req, res) => {
  const c_id = req.params.c_id;

  Company.update(req.body, {
    where: { c_id: c_id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Company was successfully updated."
        });
      } else {
        res.send({
          message: `Can't update Company with Company id: ${c_id}. Maybe Company was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Error updating Company with Company id: " + c_id
      });
    });
};

// Delete a Company with the specified Company id in the request
exports.delete = (req, res) => {
  const c_id = req.params.c_id;

  Company.destroy({
    where: { c_id: c_id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Company was deleted successfully!"
        });
      } else {
        res.send({
          message: `Can't delete Company with id ${c_id}. Maybe Company was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Could not delete Company with id " + c_id
      });
    });
};

// Delete all companies from the db
exports.deleteAll = (req, res) => {
  Company.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      re.send({ message: `${nums} companies were deleted successfully!`})
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "An error occured while deleting all companies"
      })
    })
};

/*
This controller can be modified to return a pagination response
See https://bezkoder.com/node-js-sequelize-pagination-mysql/
*/
// These are Sequelize created CRUD functions that will be used
// for Company_license

const db = require("../models");
const Company_license = db.company_licenses;
const Op = db.Sequelize.Op;

// Create and Save a new Company_license
exports.create = (req, res) => {
  // Validate request by making sure c_id isn't empty
  if (!req.body.c_id) {
    res.status(400).send({
      message: "Company ID must be filled out!"
    });
    return;
  }

  // Create a Company_license
  const company_license = {
    c_id: req.body.c_id,
    license_id: req.body.license_id,
    license_status: req.body.license_status,
    license_status_date: req.body.license_status_date,
  };

  // Save the created Company_license to the DB
  Company_license.create(company_license)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "An error occured while creating this Company_license."
      });
    });
};

// Get all Company_licenses or filter by license status from the DB
exports.findAll = (req, res) => {
  const license_status = req.query.license_status;
  // if there's a property_owner_company, that's the condition and property_owner_companys like the one entered will be listed,
  //  if not there is no condition then all Company_licenses will be listed
  var condition = license_status ? { license_status: { [Op.like]: `%${license_status}%` } } : null;

  Company_license.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "An error occured while retrieving Company_license."
      });
    });
};

// Find a single Company_license with license_id
exports.findOne = (req, res) => {
  const license_id = req.params.license_id;

  Company_license.findByPk(license_id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Company_license with license_id of: ${license_id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `Error retrieving Company_license with license_id of ` + license_id
      });
    });
};

// Update a Company_license by the license_id in the request
exports.update = (req, res) => {
  const license_id = req.params.license_id;

  Company_license.update(req.body, {
    where: { license_id: license_id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Company_license was successfully updated."
        });
      } else {
        res.send({
          message: `Can't update Company_license with license_id: ${license_id}. Maybe Company_license was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Error updating Company_license with license_id: " + license_id
      });
    });
};

// Delete a Company_license with the specified license_id in the request
exports.delete = (req, res) => {
  const license_id = req.params.license_id;

  Company_license.destroy({
    where: { license_id: license_id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Company_license was deleted successfully!"
        });
      } else {
        res.send({
          message: `Can't delete Company_license with property_owner_ein of ${c_id}. Maybe Company_license was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Could not delete Company_license with property_owner_ein " + property_owner_ein
      });
    });
};


/*
This controller can be modified to return a pagination response
See https://bezkoder.com/node-js-sequelize-pagination-mysql/
*/
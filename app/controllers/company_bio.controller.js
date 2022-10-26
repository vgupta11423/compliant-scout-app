// These are Sequelize created CRUD functions that will be used
// for Company_bio_bio

const db = require("../models");
const Company_bio = db.company_bios;
const Op = db.Sequelize.Op;

// Create and Save a new Company_bio
exports.create = (req, res) => {
  // Validate request by making sure c_id isn't empty
  if (!req.body.c_id) {
    res.status(400).send({
      message: "Company ID must be filled out!"
    });
    return;
  }

  // Create a Company_bio
  const company_bio = {
    c_id: req.body.c_id,
    first_date_op: req.body.first_date_op,
    lease_exp_date: req.body.lease_exp_date,
    property_owner_company: req.body.property_owner_company,
    property_owner_ein: req.body.property_owner_ein,
    purchase_date: req.body.purchase_date,
    purchase_price: req.body.purchase_price,
    rent: req.body.rent,
  };

  // Save the created Company_bio to the DB
  Company_bio.create(company_bio)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "An error occured while creating this Company_bio."
      });
    });
};

// Get all company_bios or find by c_id from the DB
exports.findAll = (req, res) => {
  const c_id = req.query.c_id;
  // if there's a property_owner_company, that's the condition and property_owner_companys like the one entered will be listed,
  //  if not there is no condition then all company_bios will be listed
  var condition = c_id ? { c_id: { [Op.like]: `%${c_id}%` } } : null;

  Company_bio.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "An error occured while retrieving company_bio."
      });
    });
};

// Find a single Company_bio with property_owner_ein
exports.findOne = (req, res) => {
  const property_owner_ein = req.params.property_owner_ein;

  Company_bio.findByPk(property_owner_ein)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Company_bio with property_owner_ein of: ${property_owner_ein}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `Error retrieving Company_bio with property_owner_ein of ` + property_owner_ein
      });
    });
};

// Update a Company_bio by the property_owner_ein in the request
exports.update = (req, res) => {
  const property_owner_ein = req.params.property_owner_ein;

  Company_bio.update(req.body, {
    where: { property_owner_ein: property_owner_ein }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Company_bio was successfully updated."
        });
      } else {
        res.send({
          message: `Can't update Company_bio with property_owner_ein: ${property_owner_ein}. Maybe Company_bio was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Error updating Company_bio with property_owner_ein: " + property_owner_ein
      });
    });
};

// Delete a Company_bio with the specified property_owner_ein in the request
exports.delete = (req, res) => {
  const property_owner_ein = req.params.property_owner_ein;

  Company_bio.destroy({
    where: { property_owner_ein: property_owner_ein }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Company_bio was deleted successfully!"
        });
      } else {
        res.send({
          message: `Can't delete Company_bio with property_owner_ein of ${c_id}. Maybe Company_bio was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Could not delete Company_bio with property_owner_ein " + property_owner_ein
      });
    });
};

// Delete a Company_bio with the specified property_owner_company in the request
exports.deleteByName = (req, res) => {
  const property_owner_company = req.params.property_owner_company;

  Company_bio.destroy({
    where: { property_owner_company: property_owner_company }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Company_bio was deleted successfully!"
        });
      } else {
        res.send({
          message: `Can't delete Company_bio with property_owner_company of ${property_owner_company}. Maybe Company_bio was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Could not delete Company_bio with property_owner_company " + property_owner_company
      });
    });
};


/*
This controller can be modified to return a pagination response
See https://bezkoder.com/node-js-sequelize-pagination-mysql/
*/
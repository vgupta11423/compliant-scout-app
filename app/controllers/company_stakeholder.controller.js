// These are Sequelize created CRUD functions that will be used
// for Company_stakeholder

const db = require("../models");
const Company_stakeholder = db.company_stakeholders;
const Op = db.Sequelize.Op;

// Create and Save a new Company_stakeholder
exports.create = (req, res) => {
  // Validate request by making sure c_id or s_id isn't empty
  if (!req.body.c_id || !req.body.s_id) {
    res.status(400).send({
      message: "Company ID and Stakeholder ID  must be filled out!"
    });
    return;
  }

  // Create a Company_stakeholder
  const company_stakeholder = {
    c_id: req.body.c_id,
    s_id: req.body.s_id,
  };

  // Save the created Company_stakeholder to the DB
  Company_stakeholder.create(company_stakeholder)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "An error occured while creating this Company_stakeholder."
      });
    });
};

// Get all Company_stakeholders or filter by c_id from the DB
exports.findAll = (req, res) => {
  const c_id = req.query.c_id;
  /* 
    if there's a property_owner_company, that's the condition and property_owner_companys like the one entered will be listed,
    if not there is no condition then all Company_stakeholders will be listed
  */
  var condition = c_id ? { c_id: { [Op.like]: `%${c_id}%` } } : null;

Company_stakeholder.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "An error occured while retrieving Company_stakeholder."
      });
    });
};


// Delete a Company_stakeholder with the specified s_id in the request
exports.delete = (req, res) => {
  const s_id = req.params.s_id;

  Company_stakeholder.destroy({
    where: { s_id: s_id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Company_stakeholder was deleted successfully!"
        });
      } else {
        res.send({
          message: `Can't delete Company_stakeholder with s_id of ${s_id}. Maybe Company_stakeholder was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Could not delete Company_stakeholder with s_id " + s_id
      });
    });
};


/*
This controller can be modified to return a pagination response
See https://bezkoder.com/node-js-sequelize-pagination-mysql/
*/
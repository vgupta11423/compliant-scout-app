// These are Sequelize created CRUD functions that will be used
// for Stakeholders

const db = require("../models");
const Stakeholder = db.stakeholders;
const Op = db.Sequelize.Op;

// Get all Stakeholders that have specified c_id
exports.findStakeholders = (req, res) => {
  Stakeholder.findAll({ where: {c_id: req.params.c_id} })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `An error occured while retrieving the stakeholders for company w/ c_id: ${req.params.c_id}.`
      });
    });
};

// Create and Save a new Stakeholder
exports.create = (req, res) => {
  // Validate request by making sure email isn't empty
  if (!req.body.s_email) {
    res.status(400).send({
      message: "Email must be filled out!"
    });
    return;
  }

  // Create a Stakeholder
  const stakeholder = {
    s_address: req.body.s_address,
    s_dob: req.body.s_dob,
    s_email: req.body.s_email,
    s_firstName: req.body.s_firstName,
    s_id: req.body.s_id,
    s_lastName: req.body.s_lastName,
    s_personal_funds_invested: req.body.s_personal_funds_invested,
    s_place_of_birth: req.body.s_place_of_birth,
    s_spouse_firstName: req.body.s_spouse_firstName,
    s_spouse_lastName: req.body.s_spouse_lastName,
    s_title: req.body.s_title,
  };

  // Save the created Stakeholder to the DB
  Stakeholder.create(stakeholder)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "An error occured while creating this Stakeholder."
      });
    });
};

// Get all Stakeholders or find by email from the DB
exports.findAll = (req, res) => {
  const s_email = req.query.s_email;
  // if there's an email, that's the condition and emails like the one entered will be listed,
  //  if not there is no condition and all Stakeholders will be listed
  var condition = s_email ? { s_email: { [Op.like]: `%${s_email}%` } } : null;

  Stakeholder.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "An error occured while retrieving Stakeholders."
      });
    });
};

// Find a single Stakeholder with an s_id
exports.findOne = (req, res) => {
  const s_id = req.params.s_id;

  Stakeholder.findByPk(s_id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Stakeholder with Stakeholder id: ${s_id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message ||  `Error retrieving Stakeholder with Stakeholder id ` + s_id
      });
    });
};

// Update a Stakeholder by the Stakeholder id in the request
exports.update = (req, res) => {
  const s_id = req.params.s_id;

  Stakeholder.update(req.body, {
    where: { s_id: s_id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Stakeholder was successfully updated."
        });
      } else {
        res.send({
          message: `Can't update Stakeholder with Stakeholder id: ${s_id}. Maybe Stakeholder was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Error updating Stakeholder with Stakeholder id: " + s_id
      });
    });
};

// Delete a Stakeholder with the specified Stakeholder id in the request
exports.delete = (req, res) => {
  const s_id = req.params.s_id;

  Stakeholder.destroy({
    where: { s_id: s_id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Stakeholder was deleted successfully!"
        });
      } else {
        res.send({
          message: `Can't delete Stakeholder with id ${s_id}. Maybe Stakeholder was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Could not delete Stakeholder with id " + s_id
      });
    });
};

// Delete all Stakeholders from the db
exports.deleteAll = (req, res) => {
  Stakeholder.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      re.send({ message: `${nums} Stakeholders were deleted successfully!`})
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "An error occured while deleting all Stakeholders"
      })
    })
};

/*
This controller can be modified to return a pagination response
See https://bezkoder.com/node-js-sequelize-pagination-mysql/
*/
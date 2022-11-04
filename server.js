//Imports
const express = require('express');
const cors = require('cors')
const { auth } = require('express-openid-connect');//auth property from the express-openid-connect package.
const { requiresAuth } = require('express-openid-connect');//requiresAuth will be used to protect routes and check for valid user sessions.
const app = express();

var corsOptions = {
  // origin configures the Access-Control-Allow-Origin CORS header (https://expressjs.com/en/resources/middleware/cors.html#configuration-options)
  origin: "http://localhost:5173" // only requests from "http://localhost:8081" will be allowed
};

//Middleware
app.use(cors(corsOptions));

// parse requests of content-type -> application/json
app.use(express.json())

// parse requests of content-type -> application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(authConfig));

const db = require("./app/models")

// syncs all models with our connected db
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message)
  });

//Root route of the application that redirects the user to the the companies list page.
app.get("/", (req, res) => {
  res.redirect('http://localhost:8080/api/companies')
});


require("./app/routes/user.routes")(app);
require("./app/routes/stakeholder.routes")(app);
require("./app/routes/license.routes")(app);
require("./app/routes/company.routes")(app);
require("./app/routes/company_bio.routes")(app);
require("./app/routes/company_license.routes")(app);
require("./app/routes/company_stakeholder.routes")(app);

// set port
const PORT = process.env.PORT || 8080; // w/e is in the environment variable PORT, or 8080 if there's nothing there

//listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

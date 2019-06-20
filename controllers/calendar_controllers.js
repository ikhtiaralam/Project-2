var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var calendar = require("../models/calendar");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  calendar.selectAll(function(data) {
    console.log({ data });
    res.render("index", { burgers: data });
  });
});

calendar.post("/api/calendar", function(req, res) {
  console.log(req.body.burger_name);
  burger.insertOne([req.body.burger_name], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

calendar.put("/api/calendar/:id", function(req, res) {
  var id = req.params.id;
  console.log("id", id);

  burger.updateOne(id, function(result) {
    res.json({ result });
  });
});

module.exports = router;

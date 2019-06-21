var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var calendar = require("../models/calendar");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  calendar.selectAll(function(data) {
    console.log({ data });
    res.render("index", { calendar: data });
  });
});

router.post("/api/calendar", function(req, res) {
  console.log(req.body.dates);
  calendar.insertOne([req.body.dates, req.body.app, req.body.time], function(
    result
  ) {
    // Send back the ID of the new quote
    res.json(result);
  });
});

module.exports = router;

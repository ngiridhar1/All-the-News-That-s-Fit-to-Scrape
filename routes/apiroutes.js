var db = require("../models");
var axios = require("axios");
var cheerio = require("cheerio");
var scrape = require('../scrape/scrape');

module.exports = function (app) {
  app.get('/scrape', (req, res) => {
    scrape()
      .then(() => res.send('Scrape complete'))
      .catch(error => res.status(500).json({ error: `Something went wrong: ${error} ` }));
  });
  // scrape route
  // display
  // save
  // delete
  app.get("/saved/:id", function (req, res) {
    db.Article.updateOne({ _id: req.params.id }, { isSaved: true }).then(function (data) { });
  });
}
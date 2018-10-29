const express = require("express");
const router = express.Router();
const db = require ("../models");


router.post("/articles/saved", (req, res) => {
  db.Article 
    .create(req.body) 
    .then(dbArticle => res.json(dbArticle))
    .catch(err => res.status(422).json(err));
});


module.exports = router;


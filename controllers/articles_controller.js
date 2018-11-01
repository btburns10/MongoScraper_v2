const express = require("express");
const router = express.Router();
const db = require ("../models");


router.post("/api/articles", (req, res) => {
  db.Article 
    .create(req.body) 
    .then(dbArticle => res.json(dbArticle))
    .catch(err => res.status(422).json(err));
});

router.get("/api/articles", (req, res) => {
  db.Article.find({})
    .populate("note")
    .then(dbArticles => res.json(dbArticles))
    .catch(err => console.log(err))
});


module.exports = router;


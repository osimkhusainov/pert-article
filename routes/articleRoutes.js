const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");

router
  .route("/")
  .post(articleController.createArticle)
  .get(articleController.getAllArticles);
router
  .route("/:id")
  .get(articleController.getArticle)
  .put(articleController.updateArticle)
  .delete(articleController.deleteArticle);

module.exports = router;

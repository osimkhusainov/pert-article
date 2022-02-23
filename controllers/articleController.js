const pool = require("../db/db");

exports.createArticle = async (req, res) => {
  try {
    let { content, heading } = req.body;
    if (heading === undefined || heading === null) heading = "Untitled article";
    if (!content && !heading)
      return res.status(400).json({ message: "Empty body" });
    const newTodo = await pool.query(
      "INSERT INTO article (content, heading, created_at) VALUES($1, $2, NOW()) RETURNING *",
      [content, heading]
    );
    res.status(201).json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

exports.getAllArticles = async (req, res) => {
  try {
    const articles = await pool.query("SELECT * FROM article");
    res.json(articles.rows);
  } catch (err) {
    console.error(err.message);
  }
};

exports.getArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const article = await pool.query(`SELECT * FROM article WHERE id = $1`, [
      id,
    ]);
    res.json(article.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

exports.updateArticle = async (req, res) => {
  try {
    const { id } = req.params;
    let { content, heading } = req.body;
    console.log(heading);
    if (heading === undefined || heading === null) heading = "Untitled article";
    const updateTodo = await pool.query(
      "UPDATE article SET content = $1, heading = $2, updated_at = NOW() WHERE id = $3 RETURNING *",
      [content, heading, id]
    );
    res.json(updateTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

exports.deleteArticle = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM article WHERE id = $1 RETURNING *", [id]);
    res.json({ status: "deleted" });
  } catch (err) {
    console.error(err.message);
  }
};

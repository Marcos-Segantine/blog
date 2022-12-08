import db from "./database/db";

export default async function handler(req, res) {
  const { article } = req.query

  db.query(
    "UPDATE articles SET visits=1; WHERE articles_url=?", [article]) 

  db.query("SELECT * FROM articles WHERE articles_url=?", [article], (err, result) => {
    res.status(200).json(result);
  });
}

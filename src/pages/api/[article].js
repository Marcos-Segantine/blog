import db from "./database/db";

export default async function handler(req, res) {
  const { article } = req.query
  
  db.query("SELECT * FROM articles WHERE articles_url=?", [article], (err, result) => {
    db.query("UPDATE articles SET visits=? WHERE articles_url=?", [parseInt(result[0].visits++), article])

    res.status(200).json(result);
  });
}

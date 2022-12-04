import db from "./database/db";

export default async function handler(req, res) {
  const { article } = req.query
  
  db.query("SELECT * FROM articles WHERE articles_url=?", [article], (err, result) => {
    res.status(200).json(result);
  });
}

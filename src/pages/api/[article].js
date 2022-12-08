import db from "./database/db";

export default async function handler(req, res) {
  const { article } = req.query

  db.query("SELECT visits FROM articles WHERE articles_url=?", [article], (err, result) => {
    const atualVisits = Number(result)
    const visits = atualVisits + visits  

    db.query("UPDATE articles SET visits=? WHERE articles_url=?", [visits, article]) 
  })

  db.query("SELECT * FROM articles WHERE articles_url=?", [article], (err, result) => {
    res.status(200).json(result);
  });
}

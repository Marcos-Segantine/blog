import db from "./database/db";

export default async function addVisitArticle(req, res) {
  const { article_url } = req.query

  db.query(
    `SELECT visits FROM articles WHERE articles_url=${article_url}`,
    (err, result) => {
      db.query(`UPDATE articles SET visits=${JSON.parse(result) + 1} WEHRE articles_url =${article_url}`)
    }
  );
}

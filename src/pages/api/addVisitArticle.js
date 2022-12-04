import db from "./database/db";

export default async function addVisitArticle(req, res) {
  db.query(
    `UPDATE articles SET visits=${2} WHERE articles_url=${res.article_url};`,
    (err, result) => {
      res.status(200).json(result);
    }
  );
}
